import { useEffect, useState } from "react";
import { tuyaService } from "../services/tuyaService";
import type { TuyaSensorData } from "../services/interfaces";

export default function useLatestTuyaData() {
  const [data, setData] = useState<TuyaSensorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    tuyaService.fetchLatestData()
      .then(res => {
        if (Array.isArray(res.latest_records)) setData(res.latest_records);
        else throw new Error("latest_records no es un arreglo");
      })
      .catch(e => setError((e as Error).message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}