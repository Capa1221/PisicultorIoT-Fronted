import { useEffect, useState } from "react";
import { EstacionInterface } from "../../../services/interfaces";
import { CardEstacion, CommentSection, HeaderDashboard } from "../../../components";
import { buscarTodaslasEstaciones } from "../../../services/Estaciones";

const EstacionesSistemaComponent = () => {
  const token = sessionStorage.getItem("authToken");
  const [estaciones, setEstaciones] = useState<EstacionInterface[]>([]);

  useEffect(() => {
    const fetchEstaciones = async () => {
      if (!token) {
        console.error("Token no disponible");
        return;
      }

      try {
        const response = await buscarTodaslasEstaciones(token);
        if (response.status === 200) {
          setEstaciones(response.data);
        } else {
          console.error("Error al obtener estaciones:", response);
        }
      } catch (error) {
        console.error("Error al obtener estaciones:", error);
      }
    };

    fetchEstaciones();
  }, []);

  return (
    <>
      <HeaderDashboard mensaje="Estaciones del Sistema" />
      <CommentSection mensaje="Esta sección supervisa las relaciones entre usuarios e invernaderos. Permite observar sensores vinculados y los datos en tiempo real que estos recopilan." />

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {estaciones.length > 0 ? (
          estaciones.map((estacion) => (
            <CardEstacion key={estacion.id} {...estacion} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No hay estaciones registradas.</p>
        )}
      </div>
    </>
  );
};

export default EstacionesSistemaComponent;
