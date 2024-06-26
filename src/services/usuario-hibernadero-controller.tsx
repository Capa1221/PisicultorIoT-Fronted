import axios, { AxiosResponse } from 'axios';
import { UserHibernaderoInterface } from './interfaces';

const API_URL = import.meta.env.VITE_API_URL;



export const crearUsuarioHibernadero = async (idUsuario: string, idHibernadero: string, token: string): Promise<AxiosResponse<UserHibernaderoInterface>> => {
  return axios.post<UserHibernaderoInterface>(
    `${API_URL}/v1/usuarioHibernadero/crearUsuarioHibernadero?idUsuario=${idUsuario}&idHibernadero=${idHibernadero}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const buscarPorUsuario = async (idUsuario: string, token: string): Promise<AxiosResponse<UserHibernaderoInterface>> => {
  return axios.get<UserHibernaderoInterface>(
    `${API_URL}/v1/usuarioHibernadero/buscarPorUsuario?idUsuario=${idUsuario}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const buscarPorId = async (id: string, token: string): Promise<AxiosResponse<UserHibernaderoInterface>> => {
  return axios.get<UserHibernaderoInterface>(
    `${API_URL}/v1/usuarioHibernadero/buscarPorId?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const buscarPorHibernadero = async (idHibernadero: string, token: string): Promise<AxiosResponse<UserHibernaderoInterface>> => {
  return axios.get<UserHibernaderoInterface>(
    `${API_URL}/v1/usuarioHibernadero/buscarPorHibernadero?idHibernadero=${idHibernadero}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const buscarHibernaderosUsuario = async (id: string, token: string): Promise<AxiosResponse<UserHibernaderoInterface[]>> => {
  return axios.get<UserHibernaderoInterface[]>(
    `${API_URL}/v1/usuarioHibernadero/buscarHibernaderosUsuario?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const borrarUsuarioHibernadero = async (id: string, token: string): Promise<AxiosResponse<{ message: string }>> => {
  return axios.delete<{ message: string }>(
    `${API_URL}/v1/usuarioHibernadero/borrarUsuarioHibernadero?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
