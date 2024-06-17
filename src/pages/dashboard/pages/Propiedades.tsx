import { Divider } from "@nextui-org/react";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { PropsTableTiposCultivos } from "../../../components/propiedades/PropsTableTiposCultivos";


export const Propiedades = () => {
  return (
    <>
      <HeaderDashboard mensaje={"Ajustes del sistema"} />
      <div className="p-8">
        <CommentSection mensaje={"Aquí puedes gestionar los ajustes del sistema relacionados con los sensores de los invernaderos. Puedes configurar nuevos ajustes, buscar configuraciones específicas y modificar los ajustes existentes."} />
        <div>
          <Divider className="mb-2 " />
          <h1 className="text-2xl font-semibold text-warning">Configuraci�n de Tipos de cultivos</h1>
          <div className="mt-2">
            <PropsTableTiposCultivos/>
          </div>
        </div>
      </div>
    </>
  );
}
