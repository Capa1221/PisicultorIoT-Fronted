import { Button } from "@nextui-org/react";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";

const Sensores = () => {

  return (
    <>
      <HeaderDashboard mensaje="Sensores asociados" />
      <div className="p-8">
        <CommentSection mensaje="Aquí| puedes gestionar los sensores asociados a los invernaderos. Puedes agregar nuevos sensores, buscar sensores espec�ficos y eliminar sensores existentes." />
        <Button onPress={() => (true)} color="primary" className="mb-4">
          Agregar Sensor
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 bg-red-900">
        </div>
      </div>
    </>
  );
};

export default Sensores;
