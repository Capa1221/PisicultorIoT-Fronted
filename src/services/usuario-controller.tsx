import axios, { AxiosResponse } from "axios";
import { UserInterface } from "./interfaces";

const API_URL = import.meta.env.VITE_API_URL;

export const actualizarUsuario = async (
  usuario: UserInterface,
  token: string
): Promise<AxiosResponse<UserInterface>> => {
  console.log(usuario);
  return axios.put<UserInterface>(`${API_URL}/v1/usuario/actualizar`, 
  usuario, {
    headers: {
      'authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};

export const buscarUsuarioPorId = async (
  id: string,
  token: string
): Promise<AxiosResponse<UserInterface>> => {
  return axios.get<UserInterface>(`${API_URL}/v1/usuario/buscar?id=${id}`, {
    headers: {
      'authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};

export const buscarTodosLosUsuarios = async (
  token: string
): Promise<AxiosResponse<UserInterface[]>> => {
  return axios.get<UserInterface[]>(`${API_URL}/v1/usuario/buscarTodos`, {
    headers: {
      'authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};

export const eliminarUsuario = async (
  id: string,
  token: string
): Promise<AxiosResponse<{ message: string }>> => {
  return axios.delete<{ message: string }>(`${API_URL}/v1/usuario/eliminar?id=${id}`, {
    headers: {
      'authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};
