import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { CardHibernaderosUsuarios } from "../../../components/usuarioHibernadero/CardHibernaderosUsuarios";


const UsuarioHibernaderoComponent: React.FC = () => {

  return (
    <>
      <HeaderDashboard mensaje="Hibernaderos Sistema" />
      <CommentSection mensaje="Esta sección es responsable de supervisar las relaciones entre los usuarios y los invernaderos. Permite a los usuarios observar los sensores vinculados a cada invernadero y los datos en tiempo real que recopilan." />
      <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardHibernaderosUsuarios />
      </div>
    </>
  );
};

export default UsuarioHibernaderoComponent;
