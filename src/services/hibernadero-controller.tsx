import axios, { AxiosResponse } from "axios";

const API_URL = "http://179.1.133.13/apiOrion";

interface Hibernadero {
  id: string;
  imagen: string;
  ciudad: string;
  departamento: string;
  nombre: string;
  encargado: string;
  detalles: string;
  estado: string;
}

export const actualizarHibernadero = async (
  hibernadero: Hibernadero,
  token: string
): Promise<AxiosResponse<Hibernadero>> => {
  return axios.put<Hibernadero>(
    `${API_URL}/v1/hibernadero/actualizar`,
    hibernadero,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const insertarHibernadero = async (
  hibernadero: Hibernadero,
  token: string
): Promise<AxiosResponse<Hibernadero>> => {
  return axios.post<Hibernadero>(
    `${API_URL}/v1/hibernadero/insertar`,
    hibernadero,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const buscarHibernaderoPorId = async (
  id: string,
  token: string
): Promise<AxiosResponse<Hibernadero>> => {
  return axios.get<Hibernadero>(`${API_URL}/v1/hibernadero/buscar?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const buscarTodosLosHibernaderos = async (
  token: string
): Promise<AxiosResponse<Hibernadero[]>> => {
  return axios.get<Hibernadero[]>(`${API_URL}/v1/hibernadero/buscarTodos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const eliminarHibernadero = async (
  id: string,
  token: string
): Promise<AxiosResponse<{ message: string }>> => {
  return axios.delete<{ message: string }>(
    `${API_URL}/v1/hibernadero/eliminar?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
