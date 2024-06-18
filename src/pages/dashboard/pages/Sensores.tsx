import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { ModalAgregarSensor } from "../../../components/sensores/ModalAgregarSensor";
import { CardSensores } from "../../../components/sensores/CardSensores";

const Sensores = () => {

  return (
    <>
      <HeaderDashboard mensaje="Sensores asociados" />
      <div className="m-4">
        <CommentSection mensaje="Aqu� puedes gestionar los sensores asociados a los invernaderos. Puedes agregar nuevos sensores, buscar sensores espec�ficos y eliminar sensores existentes." />
        <ModalAgregarSensor />
        <div className="my-4">
          <CardSensores/>
        </div>
      </div>
    </>
  );
};

export default Sensores;
