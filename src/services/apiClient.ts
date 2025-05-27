// src/services/apiClient.ts
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/api/v1/tuya",
});

apiClient.interceptors.request.use(config => {
  const token = sessionStorage.getItem("authToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
