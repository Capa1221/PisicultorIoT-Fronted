import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_AUTH;

interface RegisterData {
  id: string;
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

interface LoginData {
    usuario: string;
    clave: string;
  }

interface AuthResponse {
  bearer: string;
}

export const postRegister = async (registerData: RegisterData, bearerToken: string): Promise<AxiosResponse<AuthResponse>> => {
    return axios.post<AuthResponse>(`${API_URL}/auth/register`, registerData, {
      headers: {
        "Authorization": `Bearer ${bearerToken}`
      }
    });
  };
  

export const postLogin = async (loginData: LoginData): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post<AuthResponse>(`${API_URL}/auth/login`, loginData);
};
