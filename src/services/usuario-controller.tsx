import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

interface Usuario {
  id: string;
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

export const actualizarUsuario = async (
  usuario: Usuario,
  token: string
): Promise<AxiosResponse<Usuario>> => {
  return axios.put<Usuario>(`${API_URL}/v1/usuario/actualizar`, usuario, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const buscarUsuarioPorId = async (
  id: string,
  token: string
): Promise<AxiosResponse<Usuario>> => {
  return axios.get<Usuario>(`${API_URL}/v1/usuario/buscar?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const buscarTodosLosUsuarios = async (
  token: string
): Promise<AxiosResponse<Usuario[]>> => {
  return axios.get<Usuario[]>(`${API_URL}/v1/usuario/buscarTodos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
