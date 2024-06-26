import { useEffect, useState } from "react";
import { HibernaderoInterface } from "../../../services/interfaces";
import { CardHibernadero, CommentSection, HeaderDashboard, ModalAgregar } from "../../../components";
import { decodeToken } from "../../../utils/utilsToken";

const Invernaderos: React.FC = () => {

  const token = decodeToken(sessionStorage.getItem("authToken")!);
  const [hibernadero,setHibernadero] = useState <HibernaderoInterface[]>([]);

  useEffect(()=>{
    try {
      
    } catch (error) {
      
    }
  },[token])

  return (
    <>
      <HeaderDashboard mensaje="Tus Cultivos " />
      <div className="p-2">
        <CommentSection mensaje="Bienvenido a la sección de gestión de sus cultivos. En esta área, encontrará datos completos sobre cada uno de sus cultivos y podrá ejecutar tareas como la modificación, la eliminación o la asociación de usuarios. Adéntrate en tus invernaderos para mantener la supervisión y la regulación de todas las operaciones." />
        <ModalAgregar />
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardHibernadero id={""} imagen={""} ciudad={""} departamento={""} nombre={""} encargado={""} detalles={""} estado={""}/>
        </div>
      </div>
    </>
  );
};

export default Invernaderos;
