import axios, { AxiosResponse } from "axios";
import { HibernaderoInterface } from "./interfaces";

const API_URL = import.meta.env.VITE_API_URL;

export const actualizarHibernadero = async (
  hibernadero: HibernaderoInterface,
  token: string
): Promise<AxiosResponse<HibernaderoInterface>> => {
  return axios.put<HibernaderoInterface>(
    `${API_URL}/v1/hibernadero/actualizar`,
    hibernadero,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const insertarHibernadero = async (
  hibernadero: HibernaderoInterface,
  token: string
): Promise<AxiosResponse<HibernaderoInterface>> => {
  return axios.post<HibernaderoInterface>(
    `${API_URL}/v1/hibernadero/insertar`,
    hibernadero,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const buscarHibernaderoPorId = async (
  id: string,
  token: string
): Promise<AxiosResponse<HibernaderoInterface>> => {
  return axios.get<HibernaderoInterface>(`${API_URL}/v1/hibernadero/buscar?id=${id}`, {
    headers: {
      'authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};

export const buscarTodosLosHibernaderos = async (
  token: string
): Promise<AxiosResponse<HibernaderoInterface[]>> => {
  return axios.get<HibernaderoInterface[]>(`${API_URL}/v1/hibernadero/buscarTodos`, {
    headers: {
      'authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })
};

export const eliminarHibernadero = async (
  id: string,
  token: string
): Promise<AxiosResponse<{ message: string }>> => {
  return axios.delete<{ message: string }>(
    `${API_URL}/v1/hibernadero/eliminar?id=${id}`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};
