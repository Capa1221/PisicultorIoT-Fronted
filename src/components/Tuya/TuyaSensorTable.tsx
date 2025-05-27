import React from "react";
import type { TuyaSensorData } from "../../services/interfaces";

interface Props {
  records: TuyaSensorData[];
}

const TuyaSensorTable: React.FC<Props> = ({ records }) => {
  if (records.length === 0) return <p>No hay registros.</p>;

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Temperatura</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {records.map(r => (
          <tr key={r.id}>
            <td>{r.nombre}</td>
            <td>{r.temperatura !== null ? `${r.temperatura}°C` : "N/A"}</td>
            <td>{new Date(r.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TuyaSensorTable;
