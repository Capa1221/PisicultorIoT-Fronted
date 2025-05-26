import axios, { AxiosResponse } from 'axios';
import { ForgotPasswordInterface, UserInterface } from './interfaces';

const API_URL = import.meta.env.VITE_API_URL;

export const validarCodigo = async (usuario: string, codigo: string): Promise<AxiosResponse<UserInterface>> => {
  return axios.put<UserInterface>(
    `${API_URL}/v1/validacion/validarCodigo?usuario=${usuario}&codigo=${codigo}`,
    null,
    {
      headers: {
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
        "Content-Type": "application/json"
      }
    }
  );
};
