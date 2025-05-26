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
import { tuyaService, LatestResponse } from "../../services/tuyaService";
import { TuyaSensorData, TrendsAnalysis } from "../../services/interfaces/index";
import Cookies from "js-cookie";

// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const baseChartOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: { position: "top", labels: { font: { size: 14 } } },
    title: {
      display: true,
      text: "Temperatura (°C)",
      font: { size: 18, weight: "bold" },
      color: "#333",
    },
  },
  scales: {
    y: { beginAtZero: false, ticks: { color: "#333", font: { size: 12 } } },
    x: { ticks: { color: "#333", font: { size: 12 } } },
  },
};

const createChartData = (data: TuyaSensorData[]) => ({
  labels: data.map((d) => new Date(d.timestamp).toLocaleString()),
  datasets: [
    {
      label: "Temperatura (°C)",
      data: data.map((d) => d.temperatura ?? null),
      borderColor: "#ff6384",
      backgroundColor: "#ff6384",
      tension: 0.4,
      fill: false,
    },
  ],
});

export default function TuyaSensorTable() {
  const [data, setData] = useState<LatestResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          setError("No se encontró un token de autenticación. Por favor, inicia sesión.");
          return;
        }
        const response = await tuyaService.fetchLatestData(token);
        setData(response);
        setError(null); // Limpiar error si la solicitud es exitosa
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido";
        setError(errorMessage);
        console.error("Error al cargar datos de sensores:", errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.latest_records.length) return <p>No hay datos disponibles.</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>📊 Monitoreo de Temperatura</h2>
      <div style={styles.chartCard}>
        <Line
          data={createChartData(data.latest_records)}
          options={baseChartOptions}
        />
      </div>
      {data.trends_analysis && (
        <div style={styles.trends}>
          <h3>Tendencias</h3>
          <p>Temperatura: {data.trends_analysis.temperature_trend || "N/A"}</p>
        </div>
      )}
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
  header: { textAlign: "center" as const, marginBottom: "2rem", color: "#222", fontSize: "2.5rem", fontWeight: "bold" },
  chartCard: { backgroundColor: "#fff", padding: "1rem", borderRadius: "12px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" },
  trends: { marginTop: "2rem", padding: "1rem", backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" },
};