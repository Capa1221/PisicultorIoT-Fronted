import React, { useEffect, useRef } from "react";
import { createChart, ISeriesApi, Time, LineStyle } from "lightweight-charts";
import type { TuyaSensorData } from "../../services/interfaces";

interface Props {
  data: TuyaSensorData[];
}

const TemperatureChart: React.FC<Props> = ({ data }) => {
  const container = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);
  const seriesRef = useRef<ISeriesApi<"Line"> | null>(null);
  const resizeObserver = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (!container.current) return;

    const chart = createChart(container.current, {
      width: container.current.clientWidth,
      height: 320,
      layout: {
        background: { color: "#ffffff" },
        textColor: "#333",
      },
      grid: {
        vertLines: { color: "#eee" },
        horzLines: { color: "#eee" },
      },
      crosshair: {
        mode: 1,
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
      },
    });

    chartRef.current = chart;

    const lineSeries = chart.addLineSeries({
      color: "#007bff",
      lineWidth: 2,
      lineStyle: LineStyle.Solid,
      crosshairMarkerVisible: true,
      priceLineVisible: false,
      pointMarkersVisible: false,
    });

    seriesRef.current = lineSeries;

    resizeObserver.current = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        chart.resize(width, 320);
      }
    });

    resizeObserver.current.observe(container.current);

    return () => {
      chart.remove();
      resizeObserver.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!seriesRef.current || !data.length) return;

    const sorted = [...data].sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );

    const chartData = sorted
      .filter(r => r.temperatura !== null) // omitir nulos (mejor que usarlos como 0)
      .map(r => ({
        time: Math.floor(new Date(r.timestamp).getTime() / 1000) as Time,
        value: r.temperatura as number,
      }));

    seriesRef.current.setData(chartData);
    chartRef.current?.timeScale().fitContent();
  }, [data]);

  return <div ref={container} className="w-full h-[320px]" />;
};

export default TemperatureChart;
