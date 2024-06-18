import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { ModalAgregarSensor } from "../../../components/sensores/ModalAgregarSensor";
import { CardSensores } from "../../../components/sensores/CardSensores";

const Sensores = () => {

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

export default Sensores;
