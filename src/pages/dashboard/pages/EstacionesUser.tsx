import { useEffect, useState } from "react";
import { CommentSection, HeaderDashboard, ModalAgregar } from "../../../components";
import { EstacionInterface } from "../../../services/interfaces";
import { buscarTodaslasEstaciones } from "../../../services/Estaciones";
import { CardEstacion } from "../../../components/Hibernadero/CardEstacion";

export const EstacionesUser = () => {
  const [estaciones, setEstaciones] = useState<EstacionInterface[]>([]);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await buscarTodaslasEstaciones(token);
          if (response.status == 200) {
            setEstaciones(response.data);
          } else {
            console.error("FetchData Estacion error")
          }
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch hibernaderos:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <>
      <HeaderDashboard mensaje="Tus Cultivos " />
      <div className="p-2">
        <CommentSection mensaje="Bienvenido a la sección de gestión de sus cultivos. En esta área, encontrará datos completos sobre cada uno de sus cultivos y podrá ejecutar tareas como la modificación, la eliminación o la asociación de usuarios. Adéntrate en tus invernaderos para mantener la supervisión y la regulación de todas las operaciones." />
        <ModalAgregar />
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {estaciones.map((estacion) => (
            <CardEstacion 
            key={estacion.id}
            id={estacion.id} 
            imagen={estacion.imagen} 
            ciudad={estacion.ciudad} 
            departamento={estacion.departamento} 
            nombre={estacion.nombre} 
            encargado={estacion.encargado} 
            detalles={estacion.detalles} 
            estado={estacion.estado} 
            idTipoCultivo={estacion.idTipoCultivo} 
            descripcionTipoCultivo={estacion.descripcionTipoCultivo} 
            numero_Asociados={estacion.numero_Asociados} />
          ))}
        </div>
      </div>
    </>
  );
};
