import axios, { AxiosResponse } from "axios";
import { EstacionInterface } from "./interfaces";

const API_URL = import.meta.env.VITE_API_URL;

export const actualizarEstacion = async (
  Estacion: EstacionInterface,
  token: string
): Promise<AxiosResponse<EstacionInterface>> => {
  return axios.put<EstacionInterface>(
    `${API_URL}/v1/estacion/actualizar`,
    Estacion,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const insertarEstacion = async (
  Estacion: EstacionInterface,
  token: string
): Promise<AxiosResponse<EstacionInterface>> => {
  return axios.post<EstacionInterface>(
    `${API_URL}/v1/estacion/insertar`,
    Estacion,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const buscarEstacionPorId = async (
  id: string,
  token: string
): Promise<AxiosResponse<EstacionInterface>> => {
  return axios.get<EstacionInterface>(`${API_URL}/v1/estacion/buscar?id=${id}`, {
    headers: {
      'authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};

export const buscarTodaslasEstaciones = async (
  token: string
): Promise<AxiosResponse<EstacionInterface[]>> => {
  return axios.get<EstacionInterface[]>(`${API_URL}/v1/estacion/buscarTodos`, {
    headers: {
      'authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })
};

export const eliminarEstacion = async (
  id: string,
  token: string
): Promise<AxiosResponse<{ message: string }>> => {
  return axios.delete<{ message: string }>(
    `${API_URL}/v1/estacion/eliminar?id=${id}`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};
