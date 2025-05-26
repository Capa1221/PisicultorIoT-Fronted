// src/components/TuyaSensorTable.tsx
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
import Cookies from "js-cookie";

// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: { position: "top", labels: { font: { size: 14 } } },
    title: {
      display: true,
      text: "Temperatura (°C)",
      font: { size: 20, weight: "bold" },
      color: "#222",
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      ticks: { color: "#222", font: { size: 12 } },
    },
    x: {
      ticks: { color: "#222", font: { size: 12 }, maxRotation: 45, minRotation: 45 },
    },
  },
};

const createChartData = (data: LatestResponse["latest_records"]) => {
  console.log("📊 Datos para el gráfico:", data);
  return {
    labels: data.map((d) =>
      new Date(d.timestamp).toLocaleString("es-CO", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    ),
    datasets: [
      {
        label: "Temperatura (°C)",
        data: data.map((d) => d.temperatura ?? null),
        borderColor: "#ff6384",
        backgroundColor: "#ffb3c1",
        tension: 0.4,
        fill: false,
      },
    ],
  };
};

export default function TuyaSensorTable() {
  const [sensorData, setSensorData] = useState<LatestResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      const token = Cookies.get("token");
      console.log("🔑 Token obtenido:", token);

      if (!token) {
        setError("Token no encontrado. Por favor, inicia sesión.");
        setLoading(false);
        return;
      }

      try {
        console.log("📡 Consultando API de Tuya...");
        const response = await tuyaService.fetchLatestData(token);
        console.log("✅ Respuesta del servicio Tuya:", response);

        if (!response.latest_records.length) {
          throw new Error("No hay registros recientes disponibles.");
        }

        setSensorData(response);
      } catch (err: any) {
        console.error("❌ Error al obtener datos del sensor:", err);
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchSensorData();
  }, []);

  if (loading) {
    console.log("⌛ Estado: Cargando...");
    return <p style={styles.message}>⏳ Cargando datos...</p>;
  }

  if (error) {
    console.log("⚠️ Error:", error);
    return <p style={styles.message}>❌ {error}</p>;
  }

  if (!sensorData) {
    console.log("⚠️ No se encontraron datos de sensor.");
    return <p style={styles.message}>⚠️ No hay datos disponibles.</p>;
  }

  console.log("📦 Datos del sensor disponibles:", sensorData);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>📊 Monitoreo de Temperatura</h2>
      <div style={styles.chartCard}>
        <Line data={createChartData(sensorData.latest_records)} options={chartOptions} />
      </div>
      {sensorData.trends_analysis && (
        <div style={styles.trends}>
          <h3 style={{ marginBottom: "0.5rem" }}>📈 Tendencias</h3>
          <p>
            Temperatura: <strong>{sensorData.trends_analysis.temperature_trend ?? "N/A"}</strong>
          </p>
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
    backgroundColor: "#f5f5f5",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "2rem",
    color: "#222",
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  chartCard: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
  },
  trends: {
    marginTop: "2rem",
    padding: "1rem",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    fontSize: "1.1rem",
  },
  message: {
    textAlign: "center" as const,
    marginTop: "2rem",
    fontSize: "1.2rem",
    color: "#555",
  },
};
