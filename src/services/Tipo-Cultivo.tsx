import axios, { AxiosResponse } from 'axios';
import { TipoCultivoInterface } from './interfaces';

const API_URL = import.meta.env.VITE_API_URL;

// Actualizar tipo de cultivo
export const actualizarTipoCultivo = async (
  tipoCultivo: TipoCultivoInterface,
  token: string
): Promise<AxiosResponse<TipoCultivoInterface>> => {
  return axios.put<TipoCultivoInterface>(`${API_URL}/v1/tipoCultivo/actualizar`, tipoCultivo, {
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

// Guardar tipo de cultivo
export const guardarTipoCultivo = async (
  tipoCultivo: TipoCultivoInterface,
  token:string
): Promise<AxiosResponse<TipoCultivoInterface>> => {
  return axios.post<TipoCultivoInterface>(`${API_URL}/v1/tipoCultivo/guardar`, tipoCultivo, {
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

// Obtener todos los tipos de cultivo
export const obtenerTodosLosTiposCultivo = async (
  token: string
): Promise<AxiosResponse<TipoCultivoInterface[]>> => {
  return axios.get<TipoCultivoInterface[]>(`${API_URL}/v1/tipoCultivo/buscarTodos`, {
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

// Obtener tipo de cultivo por ID
export const obtenerTipoCultivoPorId = async (
  id: string,
  token:string
): Promise<AxiosResponse<TipoCultivoInterface>> => {
  return axios.get<TipoCultivoInterface>(`${API_URL}/v1/tipoCultivo/buscarPorId`, {
    params: { id },
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

// Eliminar tipo de cultivo
export const eliminarTipoCultivo = async (
  id: string,
  token: string
): Promise<AxiosResponse<{ message: string }>> => {
  return axios.delete<{ message: string }>(`${API_URL}/v1/tipoCultivo/eliminar`, {
    params: { id },
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};
