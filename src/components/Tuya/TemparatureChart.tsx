// src/components/TemperatureChart.tsx
import React, { useEffect, useRef } from "react";
import { createChart, ISeriesApi, Time } from "lightweight-charts";
import type { TuyaSensorData } from "../../services/interfaces";

interface Props {
  data: TuyaSensorData[];
}

const TemperatureChart: React.FC<Props> = ({ data }) => {
  const container = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);
  const seriesRef = useRef<ISeriesApi<"Line"> | null>(null);

  useEffect(() => {
    if (!container.current) return;
    chartRef.current = createChart(container.current, {
      width: container.current.clientWidth,
      height: 300,
      layout: { background: { color: "#fff" }, textColor: "#000" },
      grid: { vertLines: { visible: false }, horzLines: { color: "#eee" } },
      timeScale: { timeVisible: true },
    });
    seriesRef.current = chartRef.current.addLineSeries();

    return () => chartRef.current?.remove();
  }, []);

  useEffect(() => {
    if (!seriesRef.current || !data.length) return;

    // ✅ Ordenar por fecha ascendente
    const sortedData = [...data].sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );

    const chartData = sortedData.map(record => ({
      time: Math.floor(new Date(record.timestamp).getTime() / 1000) as Time,
      value: record.temperatura ?? 0,
    }));

    seriesRef.current.setData(chartData);
    chartRef.current?.timeScale().fitContent();
  }, [data]);

  return <div ref={container} style={{ width: "100%" }} />;
};

export default TemperatureChart;
