import React from "react";
import type { TuyaSensorData } from "../../services/interfaces";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Download } from "lucide-react"; // Asegúrate de instalar lucide-react

interface Props {
  records: TuyaSensorData[];
}

const TuyaSensorTable: React.FC<Props> = ({ records }) => {
  const downloadExcel = () => {
    const data = records.map(r => ({
      Nombre: r.nombre,
      Temperatura: r.temperatura !== null ? `${r.temperatura}°C` : "N/A",
      Fecha: new Date(r.timestamp).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "DatosSensor");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "tuya_sensor_data.xlsx");
  };

  if (records.length === 0)
    return <p className="text-gray-600 text-center mt-4">No hay registros disponibles.</p>;

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Registros del Sensor</h2>
        <button
          onClick={downloadExcel}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          <Download className="w-4 h-4" />
          Descargar Excel
        </button>
      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-md shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Temperatura
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map(r => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{r.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {r.temperatura !== null ? `${r.temperatura}°C` : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(r.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TuyaSensorTable;
