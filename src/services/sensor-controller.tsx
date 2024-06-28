import axios, { AxiosResponse } from 'axios';
import { SensorInterface } from './interfaces';

const API_URL = import.meta.env.VITE_API_URL;

export const crearSensor = async (sensor: SensorInterface, token: string): Promise<AxiosResponse<SensorInterface>> => {
  return axios.post<SensorInterface>(
    `${API_URL}/v1/sensor/crearSensor`,
    sensor,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const obtenerSensoresTodos = async (token: string): Promise<AxiosResponse<SensorInterface[]>> => {
  return axios.get<SensorInterface[]>(
    `${API_URL}/v1/sensor/obtenerTodos`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const obtenerSensorPorId = async (id: string, token: string): Promise<AxiosResponse<SensorInterface>> => {
  return axios.get<SensorInterface>(
    `${API_URL}/v1/sensor/obtenerPorId?id=${id}`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const obtenerSensoresPorEstacion = async (idEstacion: string, token: string): Promise<AxiosResponse<SensorInterface[]>> => {
  return axios.get<SensorInterface[]>(
    `${API_URL}/v1/sensor/obtenerPorHibernadero?idHibernadero=${idEstacion}`,
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
