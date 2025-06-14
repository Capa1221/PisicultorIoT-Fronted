import React, { useLayoutEffect, useEffect, useRef } from "react";
import {
  createChart,
  ISeriesApi,
  LineStyle,
  Time,
} from "lightweight-charts";
import type { TuyaSensorData } from "@/services/interfaces";

interface Props {
  data: TuyaSensorData[];
  /** Altura fija del canvas (px) */
  height?: number;
}

const TemperatureChart: React.FC<Props> = ({ data, height = 320 }) => {
  /* ───────────────────────── Refs ───────────────────────── */
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart>>();
  const seriesRef = useRef<ISeriesApi<"Line">>();
  const seenEpochs = useRef<Set<number>>(new Set());

  /* ────────────────── Crear gráfico una sola vez ────────── */
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    chartRef.current = createChart(containerRef.current, {
      width: containerRef.current.clientWidth || 400,
      height,
      layout: {
        background: { color: "#ffffff" },
        textColor: "#333",
      },
      grid: {
        vertLines: { color: "#eee" },
        horzLines: { color: "#eee" },
      },
      crosshair: { mode: 1 },
      timeScale: { timeVisible: true, secondsVisible: true },
    });

    seriesRef.current = chartRef.current.addLineSeries({
      color: "#007bff",
      lineWidth: 2,
      lineStyle: LineStyle.Solid,
      crosshairMarkerVisible: true,
      priceLineVisible: false,
    });

    /* Responsivo */
    const ro = new ResizeObserver(([entry]) => {
      chartRef.current?.resize(entry.contentRect.width, height);
    });
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      chartRef.current?.remove();
    };
  }, [height]);

  /* ──────────────────── Alimentar los datos ─────────────── */
  useEffect(() => {
    if (!seriesRef.current || data.length === 0) return;

    /* Convertir, deduplicar e ignorar nulos */
    const newPoints = data
      .filter(r => r.temperatura !== null)
      .map(r => {
        const epoch = Math.floor(new Date(r.timestamp).getTime() / 1000);
        return { epoch, value: r.temperatura as number };
      })
      .filter(p => !seenEpochs.current.has(p.epoch)) // sólo los nuevos
      .sort((a, b) => a.epoch - b.epoch);

    if (!newPoints.length) return;

    /* Marcar como vistos */
    newPoints.forEach(p => seenEpochs.current.add(p.epoch));

    /* Primera carga → setData | subsecuentes → update() */
    if (seenEpochs.current.size === newPoints.length) {
      // primer lote
      seriesRef.current.setData(
        newPoints.map(p => ({ time: p.epoch as Time, value: p.value }))
      );
    } else {
      newPoints.forEach(p =>
        seriesRef.current!.update({ time: p.epoch as Time, value: p.value })
      );
    }

    /* Mantener la vista pegada al tiempo real */
    chartRef.current?.timeScale().scrollToRealTime();
  }, [data]);

  return (
    <div ref={containerRef} className="w-full" style={{ height }} />
  );
};

export default TemperatureChart;