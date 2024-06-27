import { Accordion, AccordionItem, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { BiUser } from "react-icons/bi";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { EstacionInterface } from "../../services/interfaces";
import { ModalSensoresEstacion } from "./ModalSensoresEstacion";

export const CardEstacionsUsuarios = (estacion: EstacionInterface) => {
  return (
    <>
      <Card>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h4 className="font-bold text-medium text-center uppercase text-green-800 py-2">{estacion.nombre}</h4>
          <Image
            alt="Card background"
            className="object-cover rounded-3xl"
            src={estacion.imagen}
            width={270}
            isZoomed
          />
        </CardHeader>
        <CardBody className="text-gray-600 w-full">
          <div className="flex justify-around uppercase font-bold items-center">
            <p>Tipo: estacion//falta el campo</p>
            <p className={`text-white rounded-md p-1 ${estacion.estado === "1" ? 'bg-green-900' : 'bg-red-900'}`}>
              {estacion.estado === "1" ? 'ACTIVO' : 'INACTIVO'}
            </p>
          </div>
          <div>
            <p className="w-full text-center font-sans font-semibold uppercase text-warning">Propietario: {estacion.encargado}</p>
          </div>
          <div className="py-2 flex items-center justify-around">
            <p className="flex items-center space-x-1"><BiUser className="text-primary text-md" /><span className="font-sans font-semibold text-primary">2//falta el campo</span></p>
            <p className="flex items-center space-x-1"><AiTwotoneEnvironment className="text-red-500 text-md" /><small className="font-sans">{estacion.departamento} / {estacion.ciudad}</small></p>
          </div>
          <Accordion variant="splitted">
            <AccordionItem title="Detalles" indicator={
              <CgDetailsMore />
            }>
              {estacion.detalles}
            </AccordionItem>
          </Accordion>
        </CardBody>
        <CardFooter className="flex place-content-center">
          <ModalSensoresEstacion />
        </CardFooter>
      </Card>
    </>
  )
}
