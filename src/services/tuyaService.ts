import axios, { AxiosResponse } from "axios";
import { TuyaSensorData } from "./interfaces/index";

const API_URL = import.meta.env.VITE_API_URL;

export const getTuyaSensors = async (
  token: string
): Promise<AxiosResponse<TuyaSensorData[]>> => {
  return axios.get<TuyaSensorData[]>(`${API_URL}/v1/tuya`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
