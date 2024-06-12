import axios, { AxiosResponse } from "axios";

const API_URL = "http://179.1.133.13/apiOrion/auth";

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
    return axios.post<AuthResponse>(`${API_URL}/register`, registerData, {
      headers: {
        "Authorization": `Bearer ${bearerToken}`
      }
    });
  };
  

export const postLogin = async (loginData: LoginData): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post<AuthResponse>(`${API_URL}/login`, loginData,{
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer uajdjusajndsajdoa`
    }
  });
};
