// src/services/tuyaService.ts
import type { LatestResponse, SavedResponse, TuyaSensorData } from "./interfaces";
import { apiClient } from "./apiClient";

export const tuyaService = {
  saveAndFetch: () => apiClient.post<SavedResponse>("/fetch-and-save").then(r => r.data),
  fetchLatestData: () => apiClient.get<LatestResponse>("/latest").then(r => r.data),
  fetchById: (id: string) => apiClient.get<TuyaSensorData>(`/${id}`).then(r => r.data),
};
