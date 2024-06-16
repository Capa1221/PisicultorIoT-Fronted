import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { ConfiguracionModal } from "../../../components/modals/ConfiguracionModal";

export const Propiedades = () => {
  return (
    <>
      <HeaderDashboard mensaje={"Ajustes del sistema"} />
      <div className="p-8">
        <CommentSection mensaje={"Aquí puedes gestionar los ajustes del sistema relacionados con los sensores de los invernaderos. Puedes configurar nuevos ajustes, buscar configuraciones específicas y modificar los ajustes existentes."} />
        <div>
          <Card shadow="sm" isPressable >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={"Image Ajuste"}
                className="w-full object-cover h-[140px]"
                src="https://definicion.de/wp-content/uploads/2015/08/ajuste.jpg"
              />
            </CardBody>
            <CardFooter className="flex flex-col">
              <ConfiguracionModal/>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
