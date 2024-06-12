import { CommentSection } from "../../../components/comment-dashboard/comment";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";

const Sensores = () => {

  const token = sessionStorage.getItem("authToken");

  return (
    <>
      <HeaderDashboard mensaje="Sensores asociados" />
      <div className="p-8">
        <CommentSection mensaje="Aqu� puedes gestionar los sensores asociados a los invernaderos. Puedes agregar nuevos sensores, buscar sensores espec�ficos y eliminar sensores existentes." />
      </div>
    </>
  );
};

export default Sensores;

