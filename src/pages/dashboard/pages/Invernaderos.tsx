import { CardHibernadero, CommentSection, HeaderDashboard, ModalAgregar } from "../../../components";

const Invernaderos: React.FC = () => {

  return (
    <>
      <HeaderDashboard mensaje="Tus Cultivos " />
      <div className="p-2">
        <CommentSection mensaje="Bienven  ido a la sección de gestión de sus cultivos. En esta área, encontrará datos completos sobre cada uno de sus cultivos y podrá ejecutar tareas como la modificación, la eliminación o la asociación de usuarios. Adéntrate en tus invernaderos para mantener la supervisión y la regulación de todas las operaciones." />
        <ModalAgregar />
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardHibernadero id={"asdsa"} imagen={"dasdasd"} ciudad={"asdasdsa"} departamento={"asdasds"} nombre={"adasdas"} encargado={"sdaasd"} detalles={"dasd"} estado={"adsa"}/>
        </div>
      </div>
    </>
  );
};

export default Invernaderos;
