import axios, { AxiosResponse } from 'axios';
import { EstacionInterface, UserInterface } from './interfaces';
const API_URL = import.meta.env.VITE_API_URL;

export const crearUsuarioEstacion = async (idUsuario: string, idEstacion: string, token: string): Promise<AxiosResponse<EstacionInterface>> => {
  return axios.post<EstacionInterface>(
    `${API_URL}/v1/usuarioEstacion/crearUsuarioEstacion?idUsuario=${idUsuario}&idEstacion=${idEstacion}`,
    null,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const buscarUsuariosSinEstacion = async (idEstacion: string, token: string): Promise<AxiosResponse<UserInterface[]>> => {
  return axios.get<UserInterface[]>(
    `${API_URL}/v1/usuarioEstacion/buscarUsuarioSinInvernadero?idEstacion=${idEstacion}`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const buscarPorUsuario = async (idUsuario: string, token: string): Promise<AxiosResponse<EstacionInterface[]>> => {
  return axios.get<EstacionInterface[]>(
    `${API_URL}/v1/usuarioEstacion/buscarPorUsuario?idUsuario=${idUsuario}`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const buscarPorId = async (id: string, token: string): Promise<AxiosResponse<EstacionInterface>> => {
  return axios.get<EstacionInterface>(
    `${API_URL}/v1/usuarioEstacion/buscarPorId?id=${id}`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const buscarPorEstacion = async (idEstacion: string, token: string): Promise<AxiosResponse<EstacionInterface>> => {
  return axios.get<EstacionInterface>(
    `${API_URL}/v1/usuarioEstacion/buscarPorEstacion?idEstacion=${idEstacion}`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const buscarEstacionesUsuario = async (id: string, token: string): Promise<AxiosResponse<EstacionInterface[]>> => {
  return axios.get<EstacionInterface[]>(
    `${API_URL}/v1/usuarioEstacion/buscarEstacionesUsuario?id=${id}`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const borrarUsuarioEstacion = async (id: string, token: string): Promise<AxiosResponse<{ message: string }>> => {
  return axios.delete<{ message: string }>(
    `${API_URL}/v1/usuarioEstacion/borrarUsuarioEstacion?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
