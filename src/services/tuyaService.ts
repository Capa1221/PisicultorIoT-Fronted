import axios from "axios";

const API_URL = "http://179.1.133.13/apiOrion/api/v1";

export const tuyaService = {
  fetchLatestData: async (token: string) => {
    try {
      const res = await axios.get(`${API_URL}/tuya/latest`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error: any) {
      // 👇 Agregamos este bloque para imprimir detalles del error
      if (error.response) {
        console.error("🛑 Error de respuesta del servidor:");
        console.error("Código de estado:", error.response.status);
        console.error("Datos:", error.response.data);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("📡 La solicitud fue hecha pero no hubo respuesta:");
        console.error(error.request);
      } else {
        console.error("❌ Error al configurar la solicitud:");
        console.error(error.message);
      }

      // Lanzamos un mensaje de error genérico
      throw new Error("Error al obtener datos: " + error.message);
    }
  },
};
