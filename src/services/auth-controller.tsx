import axios, { AxiosResponse } from "axios";

const API_URL = "http://179.1.133.13/apiOrion/auth";

export const postLogin = async (usuario: string, clave: string) => {
  try {
    const response = await axios.post(API_URL+'/login', {
      usuario,
      clave,
    });
    return response;
  } catch (error) {
    return error;
  }
};

interface RegisterData {
  id: string;
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

interface RegisterResponse {
  bearer: string;
}

export const postRegister = async (registerData: RegisterData): Promise<AxiosResponse<RegisterResponse>> => {
  return axios.post<RegisterResponse>(API_URL+'/register', registerData);
};

