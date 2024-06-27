import axios, { AxiosResponse } from 'axios';
import { FormularioInterface } from './interfaces';

const API_URL = import.meta.env.VITE_API_URL;

// Actualizar formulario
export const actualizarFormulario = async (
  formulario: FormularioInterface,
  token: string
): Promise<AxiosResponse<FormularioInterface>> => {
  console.log(formulario);
  return axios.put<FormularioInterface>(`${API_URL}/v1/formulario/actualizar`, formulario, {
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

// Crear formulario
export const crearFormulario = async (
  formulario: FormularioInterface
): Promise<AxiosResponse<FormularioInterface>> => {
  return axios.post<FormularioInterface>(`${API_URL}/v1/formulario/crear`, formulario, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Obtener formulario por ID
export const obtenerFormularioPorId = async (
  id: string,
  token: string
): Promise<AxiosResponse<FormularioInterface>> => {
  return axios.get<FormularioInterface>(`${API_URL}/v1/formulario/obtenerPorId?id=${id}`, {
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

// Obtener todos los formularios
export const obtenerTodosLosFormularios = async (
  token: string
): Promise<AxiosResponse<FormularioInterface[]>> => {
  return axios.get<FormularioInterface[]>(`${API_URL}/v1/formulario/obtenerTodos`, {
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

// Eliminar formulario
export const borrarFormulario = async (
  id: string,
  token: string
): Promise<AxiosResponse<{ message: string }>> => {
  return axios.delete<{ message: string }>(`${API_URL}/v1/formulario/borrar?id=${id}`, {
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

// Aceptar usuario
export const aceptarUsuario = async (
  idFormulario: string,
  token: string
): Promise<AxiosResponse<{ message: string }>> => {
  return axios.post<{ message: string }>(`${API_URL}/v1/formulario/aceptarUsuario?idFormulario=${idFormulario}`,null, {
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};
