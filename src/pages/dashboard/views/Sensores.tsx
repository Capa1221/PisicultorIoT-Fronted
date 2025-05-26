import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { ModalAgregarSensor } from "../../../components/sensores/ModalAgregarSensor";
import { CardSensores } from "../../../components/sensores/CardSensores";
import { useEffect, useState } from "react";
import { SensorInterface } from "../../../services/interfaces";
import { obtenerSensoresPorUsuario } from "../../../services/sensor-controller";
import { decodeToken } from "../../../utils/utilsToken";

const Sensores = () => {
  const token = sessionStorage.getItem("authToken")!;
  const decodetoken = decodeToken(token);
  const [sensores, setSensores] = useState<SensorInterface[]>([]);

  useEffect(() => {
    const fetchSensores = async () => {
      try {
        if (token) {
          const response = await obtenerSensoresPorUsuario(decodetoken.idUsuario, token);
          if (response.status == 200) {
            setSensores(response.data);
          } else {
            console.error("error fetchSensores");
          }
        } else {
          console.error("error token");
        }
      } catch (error) {
        console.error("error", error);
      }
    }
    fetchSensores();
  }, [token]);

  return (
    <>
      <HeaderDashboard mensaje="Sensores asociados" />
      <div className="m-4">
        <CommentSection mensaje="Aquí puedes gestionar los sensores asociados a los invernaderos. Puedes agregar nuevos sensores, buscar sensores específicos y eliminar sensores existentes." />
        <ModalAgregarSensor />
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sensores.map((sensor) => (
            <CardSensores
              key={sensor.id}
              id={sensor.id}
              idEstacion={sensor.idEstacion}
              nombre={sensor.nombre}
              descripcion={sensor.descripcion}
              config={sensor.config} 
              ubicacion={sensor.ubicacion}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sensores