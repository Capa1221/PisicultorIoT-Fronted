import axios, { AxiosResponse } from "axios";
import type { SensorReading } from "../services/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

export const obtenerDatosPorRangoFechasYSensor = async (
  fechaInicial: string,
  fechaFinal: string,
  idSensor: string,
  token: string
): Promise<AxiosResponse<SensorReading[]>> => {
  // Agregamos hora a las fechas para cubrir todo el rango
  const fechaInicialConHora = `${fechaInicial}T00:00:00`;
  const fechaFinalConHora = `${fechaFinal}T23:59:59`;

  console.log("Petición:", {
    fechaInicial: fechaInicialConHora,
    fechaFinal: fechaFinalConHora,
    idSensor,
  });

  return axios.get<SensorReading[]>(
    `${API_URL}/v1/datos/rangoFechasporSensor`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params: {
        fechaInicial: fechaInicialConHora,
        fechafinal: fechaFinalConHora, // usa el nombre exacto que espera el backend
        idSensor,
      },
    }
  );
};
