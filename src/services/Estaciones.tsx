import axios, { AxiosResponse } from "axios";
import { EstacionInterface } from "./interfaces";

const API_URL = import.meta.env.VITE_API_URL;

export const actualizarEstacion = async (
  estacion: EstacionInterface,
  token: string
): Promise<AxiosResponse<EstacionInterface>> => {
  if (!token) throw new Error("Token no proporcionado");
  return axios.put<EstacionInterface>(
    `${API_URL}/v1/estacion/actualizar`,
    estacion,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const insertarEstacion = async (
  estacion: EstacionInterface,
  token: string
): Promise<AxiosResponse<EstacionInterface>> => {
  if (!token) throw new Error("Token no proporcionado");
  return axios.post<EstacionInterface>(
    `${API_URL}/v1/estacion/insertar`,
    estacion,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const buscarEstacionPorId = async (
  id: string,
  token: string
): Promise<AxiosResponse<EstacionInterface>> => {
  if (!token) throw new Error("Token no proporcionado");
  return axios.get<EstacionInterface>(`${API_URL}/v1/estacion/buscar?id=${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};

export const buscarEstacionesPropietario = async (
  token: string,
  id: string
): Promise<AxiosResponse<EstacionInterface[]>> => {
  if (!token) throw new Error("Token no proporcionado");
  return axios.get<EstacionInterface[]>(`${API_URL}/v1/estacion/buscarEstacionesPropietario?idUsuario=${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};

export const buscarTodaslasEstaciones = async (
  token: string,
  idUsuario?: string
): Promise<AxiosResponse<EstacionInterface[]>> => {
  if (!token) throw new Error("Token no proporcionado");
  const url = idUsuario
    ? `${API_URL}/v1/estacion/buscarTodos?idUsuario=${idUsuario}`
    : `${API_URL}/v1/estacion/buscarTodos`;

  return axios.get<EstacionInterface[]>(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};


export const eliminarEstacion = async (
  id: string,
  token: string
): Promise<AxiosResponse<{ message: string }>> => {
  if (!token) throw new Error("Token no proporcionado");
  return axios.delete<{ message: string }>(
    `${API_URL}/v1/estacion/eliminar?id=${id}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};
