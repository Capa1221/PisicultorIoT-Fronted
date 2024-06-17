import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { Accordion, AccordionItem, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { BiUser } from "react-icons/bi";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { RiSensorLine } from "react-icons/ri";

const UsuarioHibernaderoComponent: React.FC = () => {

  return (
    <>
      <HeaderDashboard mensaje="Asociaciones Usuario-Hibernadero" />
      <CommentSection mensaje="Aqui puedes gestionar las asociaciones entre usuarios e hibernaderos.
          Puedes crear nuevas asociaciones, buscar por usuario o hibernadero, y
          eliminar asociaciones existentes."/>
      <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <h4 className="font-bold text-medium text-center uppercase text-green-800 py-2">Hibernadero De Yuca</h4>
            <Image
              alt="Card background"
              className="object-cover rounded-3xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
              isZoomed
            />
          </CardHeader>
          <CardBody className="text-gray-600 w-full">
            <div className="flex justify-around uppercase font-bold items-center">
              <p>Tipo: Hibernadero</p>
              <p className="text-white bg-green-900 rounded-md p-1">activo</p>
            </div>
            <div>
              <p className="w-full text-center font-sans font-semibold uppercase text-warning">Propietario: Miguel Veroza</p>
            </div>
            <div className="py-2 flex items-center justify-around">
              <p className="flex items-center space-x-1"><BiUser className="text-primary text-md" /><span className="font-sans font-semibold text-primary">2</span></p>
              <p className="flex items-center space-x-1"><AiTwotoneEnvironment className="text-red-500 text-md" /><small className="font-sans">Norte de Santander / Pamplona</small></p>
            </div>
            <Accordion variant="splitted">
              <AccordionItem title="Detalles" indicator={
                <CgDetailsMore />
              }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam, aliquid dicta eum est laboriosam tenetur. Harum fugiat neque non cupiditate vero pariatur, ratione minima eos assumenda iusto, rem animi.
              </AccordionItem>
            </Accordion>
          </CardBody>
          <CardFooter className="flex place-content-center">
            <Button color="primary" startContent={<RiSensorLine/>}>Sensores Asociado</Button>
          </CardFooter>
        </Card>
      </div>

    </>
  );
};

export default UsuarioHibernaderoComponent;
