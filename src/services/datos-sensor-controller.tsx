import axios, { AxiosResponse } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

interface DatosSensor {
  idSensor: string;
  valor: string;
}

export const insertarDatosSensor = async (datosSensor: DatosSensor, token: string): Promise<AxiosResponse<DatosSensor>> => {
  return axios.post<DatosSensor>(
    `${API_URL}/v1/datos/insertar`,
    datosSensor,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const obtenerDatosPorRangoFechasYSensor = async (fechaInicial: string, fechaFinal: string, idSensor: string, token: string): Promise<AxiosResponse<DatosSensor[]>> => {
  return axios.get<DatosSensor[]>(
    `${API_URL}/v1/datos/rangoFechasporSensor?fechaInicial=${fechaInicial}&fechafinal=${fechaFinal}&idSensor=${idSensor}`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};
