import axios, { AxiosResponse } from 'axios';
import { SensorData } from './interfaces';

const API_URL = import.meta.env.VITE_API_URL;

export const obtenerDatosPorRangoFechasYSensor = async (fechaInicial: string, fechaFinal: string, idSensor: string, token: string): Promise<AxiosResponse<SensorData[]>> => {
  return axios.get<SensorData[]>(
    `${API_URL}/v1/datos/rangoFechasporSensor?fechaInicial=${fechaInicial}&fechafinal=${fechaFinal}&idSensor=${idSensor}`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};
