import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import ModalAgregar from "../../../components/Hibernadero/modalAgregar";


const Hibernaderos: React.FC = () => {
  return (
    <>
      <HeaderDashboard mensaje="Tus Cultivos " />
      <div className="px-8 py-2">
        <CommentSection mensaje="Bienvenido a la sección de gestión de sus cultivos. En esta área, encontrará datos completos sobre cada uno de sus cultivos y podrá ejecutar tareas como la modificación, la eliminación o la asociación de usuarios. Adéntrate en tus invernaderos para mantener la supervisión y la regulación de todas las operaciones."/>
        <ModalAgregar/>
      </div>
      
    </>
  );
};

export default Hibernaderos;
