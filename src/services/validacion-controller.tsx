import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://179.1.133.13/apiOrion';

export const validarCodigo = async (usuario: string, codigo: string, token: string): Promise<AxiosResponse<string>> => {
  return axios.put<string>(
    `${API_URL}/v1/validacion/validarCodigo?usuario=${usuario}&codigo=${codigo}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const crearCodigo = async (usuario: string, token: string): Promise<AxiosResponse<string>> => {
  return axios.post<string>(
    `${API_URL}/v1/validacion/crearCodigo?usuario=${usuario}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
