import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { TableUser } from "../../../components/users/TableUser";

export const Usuarios = () => {

  return (
    <div>
      <HeaderDashboard mensaje="Usuarios en el sistema" />
      <CommentSection mensaje="Bienvenido a la sección de administración de usuarios del sistema. Aquí puedes ver la lista de usuarios registrados, realizar acciones como visualizar detalles adicionales." />
      <div className="my-8">
        <TableUser/>
      </div>
    </div>
  );
};

