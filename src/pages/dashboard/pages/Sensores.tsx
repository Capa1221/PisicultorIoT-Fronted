import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { ModalAgregarSensor } from "../../../components/sensores/ModalAgregarSensor";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { MdSensors } from "react-icons/md";
import { BsCheckAll, BsTrash } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";

const Sensores = () => {

  return (
    <>
      <HeaderDashboard mensaje="Sensores asociados" />
      <div className="m-4">
        <CommentSection mensaje="Aqu� puedes gestionar los sensores asociados a los invernaderos. Puedes agregar nuevos sensores, buscar sensores espec�ficos y eliminar sensores existentes." />
        <ModalAgregarSensor />
        <div className="my-4">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <MdSensors className="text-5xl text-warning" />
              <div className="flex flex-col">
                <p className="text-md font-semibold text-xl uppercase ">Sensor de Agua</p>
                <div className="flex justify-around items-center space-x-5">
                  <p className="text-small text-default-500">Norte de Santander / Pamplona</p>
                  <Button className="w-min p-1 text-primary font-sans font-semibold" color="primary" variant="bordered" startContent={<BsCheckAll className="text-2xl" />}>Configurado</Button>
                </div>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aperiam asperiores, magni dicta atque, incidunt ea ipsa quaerat dignissimos amet dolore laboriosam ullam neque, exercitationem consequuntur delectus velit. Mollitia, eos.</p>
            </CardBody>
            <Divider />
            <CardFooter className="justify-around">
              <div className="space-x-2">
                <Button color="danger"  variant="bordered" startContent={<BsTrash className="text-2xl"/>}></Button>
                <Button color="warning" variant="bordered" startContent={<TiEdit className="text-2xl"/>}></Button>
              </div>
              <Button color="primary">Ver datos</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Sensores;
