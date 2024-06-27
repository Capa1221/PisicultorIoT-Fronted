import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { TableUser } from "../../../components/users/TableUser";
import { Divider } from "@nextui-org/react";
import { TableFormUsers } from "../../../components/users/TableFormUsers";
import { ModalUserAdd } from "../../../components/users/ModalUserAdd";

export const Usuarios = () => {

  return (
    <div>
      <HeaderDashboard mensaje="Usuarios en el sistema" />
      <CommentSection mensaje="Bienvenido a la sección de administración de usuarios del sistema. Aquí puedes ver la lista de usuarios registrados, realizar acciones como visualizar detalles adicionales." />
      <div className="my-8">
        <ModalUserAdd/>
        <TableUser/>
        <Divider className="my-8"/>
        <p className="font-bold uppercase text-primary pb-4">Formularios de acceso</p>
        <TableFormUsers/>
      </div>
    </div>
  );
};

