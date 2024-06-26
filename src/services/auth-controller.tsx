import axios, { AxiosResponse } from "axios";
import { LoginUser, RegisterUser } from "./interfaces/auth-interface";

const API_URL = import.meta.env.VITE_API_AUTH;

interface AuthResponse {
  bearer: string;
}

export const postRegister = async (registerData: RegisterUser, bearerToken: string): Promise<AxiosResponse<AuthResponse>> => {
    return axios.post<AuthResponse>(`${API_URL}/auth/register`, registerData, {
      headers: {
        "Authorization": `Bearer ${bearerToken}`
      }
    });
  };
  

export const postLogin = async (loginData: LoginUser): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post<AuthResponse>(`${API_URL}/auth/login`, loginData);
};
