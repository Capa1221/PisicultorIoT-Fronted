import React, { useEffect, useState } from "react";
import TemperatureChart from "../../../components/Tuya/TemparatureChart";
import TuyaSensorTable from "../../../components/Tuya/TuyaSensorTable";
import useLatestTuyaData from "../../../hooks/useLatestTuyaData";
import type { TuyaSensorData } from "../../../services/interfaces";

const STORAGE_KEY = "tuya_sensor_records";

const TuyaSensorPage: React.FC = () => {
  const { data, loading, error } = useLatestTuyaData();
  const [mergedData, setMergedData] = useState<TuyaSensorData[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const oldData: TuyaSensorData[] = stored ? JSON.parse(stored) : [];

    const map = new Map<string, TuyaSensorData>();

    // Agrega anteriores
    oldData.forEach(r => map.set(r.id, r));

    // Agrega nuevos
    if (data) {
      data.forEach(r => map.set(r.id, r));
    }

    const combined = Array.from(map.values()).sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );

    setMergedData(combined);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(combined));
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-gray-500 text-lg animate-pulse">Cargando datos...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-600 text-lg font-semibold">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        📈 Panel Sensor Tuya - Temperatura
      </h1>

      <section className="mb-10 bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Gráfica de Temperatura</h2>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <TemperatureChart data={mergedData} />
        </div>
      </section>

      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">📋 Últimos Registros</h2>
        <TuyaSensorTable records={mergedData} />
      </section>
    </div>
  );
};

export default TuyaSensorPage;
