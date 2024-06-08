import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://179.1.133.13/apiOrion/auth/login';

interface LoginResponse {
  token: string; 
  user: {
    id: string;
    email: string;
  };
}

export const postLogin = async (usuario: string, clave: string): Promise<AxiosResponse<LoginResponse>> => {
  return axios.post<LoginResponse>(API_URL, {
    usuario,
    clave
  });
};
