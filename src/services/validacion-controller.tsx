import axios, { AxiosResponse } from 'axios';
import { ForgotPasswordInterface } from './interfaces';

const API_URL = import.meta.env.VITE_API_URL;

export const validarCodigo = async (usuario: string, codigo: string, token: string): Promise<AxiosResponse<string>> => {
  return axios.put<string>(
    `${API_URL}/v1/validacion/validarCodigo?usuario=${usuario}&codigo=${codigo}`,
    null,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const crearCodigo = async (usuario: string): Promise<AxiosResponse<ForgotPasswordInterface>> => {
  return axios.post<ForgotPasswordInterface>(
    `${API_URL}/v1/validacion/crearCodigo?usuario=${usuario}`,
    null,
    {
      headers: {
        'authorization': `Bearer ${sessionStorage.getItem("authToken")}`,
        "Content-Type": "application/json"
      }
    }
  );
};
