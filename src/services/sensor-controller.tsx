import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://179.1.133.13/apiOrion';

interface Sensor {
  id: string;
  idHibernadero: string;
  nombre: string;
  descripcion: string;
  config: boolean;
}

export const crearSensor = async (sensor: Sensor, token: string): Promise<AxiosResponse<Sensor>> => {
  return axios.post<Sensor>(
    `${API_URL}/v1/sensor/crearSensor`,
    sensor,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const obtenerSensoresTodos = async (token: string): Promise<AxiosResponse<Sensor[]>> => {
  return axios.get<Sensor[]>(
    `${API_URL}/v1/sensor/obtenerTodos`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const obtenerSensorPorId = async (id: string, token: string): Promise<AxiosResponse<Sensor>> => {
  return axios.get<Sensor>(
    `${API_URL}/v1/sensor/obtenerPorId?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const obtenerSensorPorHibernadero = async (idHibernadero: string, token: string): Promise<AxiosResponse<Sensor>> => {
  return axios.get<Sensor>(
    `${API_URL}/v1/sensor/obtenerPorHibernadero?idHibernadero=${idHibernadero}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const borrarSensor = async (id: string, token: string): Promise<AxiosResponse<{ message: string }>> => {
  return axios.delete<{ message: string }>(
    `${API_URL}/v1/sensor/borrarSensor?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
