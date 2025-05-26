import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { getTuyaSensors } from "../../services/tuyaService";
import { TuyaSensorData } from "../../services/interfaces/index";
import Cookies from "js-cookie";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const metrics = [
  { key: "temperatura", label: "Temperatura (°C)", color: "#ff6384" },
  { key: "humedad", label: "Humedad (%)", color: "#36a2eb" },
  { key: "oxigenacion", label: "Oxigenación (mg/L)", color: "#ffce56" },
  { key: "ph", label: "pH del Agua", color: "#4bc0c0" },
  { key: "peso", label: "Peso del Cultivo (g)", color: "#9966ff" },
];

const baseChartOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: { font: { size: 14 } },
    },
    title: {
      display: true,
      text: "",
      font: { size: 18, weight: "bold" },
      color: "#333",
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      ticks: {
        color: "#333",
        font: { size: 12 },
      },
    },
    x: {
      ticks: {
        color: "#333",
        font: { size: 12 },
      },
    },
  },
};

const getChartOptions = (titleText: string): ChartOptions<"line"> => ({
  ...baseChartOptions,
  plugins: {
    ...baseChartOptions.plugins,
    title: { ...baseChartOptions.plugins?.title, text: titleText },
  },
});

const createChartData = (
  data: TuyaSensorData[],
  key: keyof TuyaSensorData,
  label: string,
  color: string
) => ({
  labels: data.map((d) => d.fecha),
  datasets: [
    {
      label,
      data: data.map((d) => d[key] as number),
      borderColor: color,
      backgroundColor: color,
      tension: 0.4,
      fill: false,
    },
  ],
});

export default function TuyaChart() {
  const [data, setData] = useState<TuyaSensorData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) throw new Error("Token no encontrado");
        const response = await getTuyaSensors(token);
        setData(response.data);
      } catch (error) {
        console.error("Error al cargar datos de sensores:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (!data.length) return <p>No hay datos disponibles.</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>📊 Panel de Monitoreo Ambiental</h2>

      <div style={styles.grid}>
        {metrics.map((metric) => (
          <div key={metric.key} style={styles.chartCard}>
            <Line
              data={createChartData(data, metric.key as keyof TuyaSensorData, metric.label, metric.color)}
              options={getChartOptions(metric.label)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "2rem 1rem",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "2rem",
    color: "#222",
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  chartCard: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
  },
};
