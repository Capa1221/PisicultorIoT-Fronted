import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { ModalAgregarSensor } from "../../../components/sensores/ModalAgregarSensor";
import { CardSensores } from "../../../components/sensores/CardSensores";
import { useEffect, useState } from "react";
import { SensorInterface } from "../../../services/interfaces";
import { obtenerSensoresPorUsuario } from "../../../services/sensor-controller";
import { decodeToken } from "../../../utils/utilsToken";

export const Sensores = () => {
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
        <CommentSection mensaje="Aquí puedes gestionar los sensores asociados a los invernaderos. Puedes agregar nuevos sensores, buscar sensores especï¿½ficos y eliminar sensores existentes." />
        <ModalAgregarSensor />
        <div className="my-4">
          {sensores.map((sensor) => (
            <CardSensores
              key={sensor.id}
              id={sensor.id}
              idHibernadero={sensor.idHibernadero}
              nombre={sensor.nombre}
              descripcion={sensor.descripcion}
              config={sensor.config} />
          ))}
        </div>
      </div>
    </>
  );
};
