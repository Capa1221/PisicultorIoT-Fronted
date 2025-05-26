import { useEffect, useState } from "react";
import { EstacionInterface } from "../../../services/interfaces";
import { CardEstacion, CommentSection, HeaderDashboard } from "../../../components";
import { buscarTodaslasEstaciones } from "../../../services/Estaciones";

const EstacionesSistemaComponent = () => {
  const token = sessionStorage.getItem("authToken")!;
  const [estaciones, setEstaciones] = useState<EstacionInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const responseEstaciones = await buscarTodaslasEstaciones(token);
          setEstaciones(responseEstaciones.data);
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch Estaciones:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <>
      <HeaderDashboard mensaje="Estaciones Sistema" />
      <CommentSection mensaje="Esta sección es responsable de supervisar las relaciones entre los usuarios y los invernaderos. Permite a los usuarios observar los sensores vinculados a cada invernadero y los datos en tiempo real que recopilan." />
      <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {estaciones ? estaciones.map((estacion) => (
          <CardEstacion key={estacion.id} {...estacion} />
        )) : <p></p>}
      </div>
    </>
  );
};

export default EstacionesSistemaComponent