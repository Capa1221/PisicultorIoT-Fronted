import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import ModalAgregar from "../../../components/Hibernadero/modalAgregar";
import { CardHibernadero } from "../../../components/Hibernadero/cardHibernadero";


const Hibernaderos: React.FC = () => {
  

  return (
    <>
      <HeaderDashboard mensaje="Tus Cultivos " />
      <div className="p-2">
        <CommentSection mensaje="Bienvenido a la sección de gestión de sus cultivos. En esta área, encontrará datos completos sobre cada uno de sus cultivos y podrá ejecutar tareas como la modificación, la eliminación o la asociación de usuarios. Adéntrate en tus invernaderos para mantener la supervisión y la regulación de todas las operaciones." />
        <ModalAgregar />
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardHibernadero/>
        </div>
      </div>
    </>
  );
};

export default Hibernaderos;
