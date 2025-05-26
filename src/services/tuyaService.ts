import axios, { AxiosResponse } from "axios";
import { TuyaSensorData, TrendsAnalysis, LatestResponse } from "./interfaces/index";

const API_URL = import.meta.env.VITE_API_URL || "http://179.1.133.13/apiOrion";

// Función para evitar duplicación de slashes
const getApiUrl = (path: string) => {
  const base = API_URL.replace(/\/+$/, ""); // Elimina slashes finales
  const cleanPath = path.replace(/^\/+/, ""); // Elimina slashes iniciales
  return `${base}/${cleanPath}`;
};

export const tuyaService = {
  fetchLatestData: async (token?: string): Promise<LatestResponse> => {
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await axios.get<LatestResponse>(getApiUrl("api/v1/tuya/latest"), {
        headers,
      });
      return response.data;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido";
      const responseError = (error as any)?.response?.statusText || (error as any)?.response?.data?.message || errorMessage;
      throw new Error(`Error fetching latest data: ${responseError}`);
    }
  },
};

export type { LatestResponse };
