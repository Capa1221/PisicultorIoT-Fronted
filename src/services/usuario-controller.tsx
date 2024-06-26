import axios, { AxiosResponse } from "axios";
import { UserInterface } from "./interfaces";

const API_URL = import.meta.env.VITE_API_URL;

export const actualizarUsuario = async (
  usuario: UserInterface,
  token: string
): Promise<AxiosResponse<UserInterface>> => {
  return axios.put<UserInterface>(`${API_URL}/v1/usuario/actualizar`, usuario, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const buscarUsuarioPorId = async (
  id: string,
  token: string
): Promise<AxiosResponse<UserInterface>> => {
  return axios.get<UserInterface>(`${API_URL}/v1/usuario/buscar?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const buscarTodosLosUsuarios = async (
  token: string
): Promise<AxiosResponse<UserInterface[]>> => {
  return axios.get<UserInterface[]>(`${API_URL}/v1/usuario/buscarTodos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
