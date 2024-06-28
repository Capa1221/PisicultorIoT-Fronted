import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { ModalAgregarSensor } from "../../../components/sensores/ModalAgregarSensor";
import { CardSensores } from "../../../components/sensores/CardSensores";
import { useEffect, useState } from "react";
import { SensorInterface } from "../../../services/interfaces";

export const Sensores = () => {
  const token = sessionStorage.getItem("authToken");
  const [sensores, setSensores] = useState<SensorInterface[]>([]);

  useEffect(()=>{
    const fetchSensores = async () =>{
      try {
        if(token){
          const response = await 
        }else{
          console.error("error token");
        }
      } catch (error) {
        
      }

    }
  },[token]);

  return (
    <>
      <HeaderDashboard mensaje="Sensores asociados" />
      <div className="m-4">
        <CommentSection mensaje="Aquí puedes gestionar los sensores asociados a los invernaderos. Puedes agregar nuevos sensores, buscar sensores especï¿½ficos y eliminar sensores existentes." />
        <ModalAgregarSensor />
        <div className="my-4">
          <CardSensores/>
        </div>
      </div>
    </>
  );
};
