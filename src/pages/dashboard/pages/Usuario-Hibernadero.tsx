import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { CardHibernaderosUsuarios } from "../../../components/usuarioHibernadero/CardHibernaderosUsuarios";


const UsuarioHibernaderoComponent: React.FC = () => {

  return (
    <>
      <HeaderDashboard mensaje="Asociaciones Usuario-Hibernadero" />
      <CommentSection mensaje="Aqui puedes gestionar las asociaciones entre usuarios e hibernaderos.
          Puedes crear nuevas asociaciones, buscar por usuario o hibernadero, y
          eliminar asociaciones existentes."/>
      <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardHibernaderosUsuarios/>
      </div>
    </>
  );
};

export default UsuarioHibernaderoComponent;
