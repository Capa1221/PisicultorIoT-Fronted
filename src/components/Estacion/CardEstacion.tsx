import { Accordion, AccordionItem, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { CgDetailsMore } from "react-icons/cg";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { ModalAsociarEstacion, ModalEditar, ModalEliminar } from "..";
import { EstacionInterface } from "../../services/interfaces";
import { ModalUsuariosAsociados } from "./ModalUsuariosAsociados";

export const CardEstacion = (Estacion: EstacionInterface) => {

    return (
        <>
            <Card>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <h4 className="font-bold text-medium text-center uppercase text-green-800 py-2">{Estacion.nombre}</h4>
                    <Image
                        alt="Card background"
                        className="object-cover rounded-3xl"
                        src={Estacion.imagen}
                        width={270}
                        isZoomed
                    />
                </CardHeader>
                <CardBody className="text-gray-600 w-full">
                    <div className="flex justify-around uppercase font-bold items-center">
                        <p>Tipo: {Estacion.descripcionTipoCultivo}</p>
                        <p className={`text-white rounded-md p-1 ${Estacion.estado === "1" ? 'bg-green-900' : 'bg-red-900'}`}>
                            {Estacion.estado === "1" ? 'ACTIVO' : 'INACTIVO'}
                        </p>
                    </div>
                    <div>
                        <p className="w-full text-center font-sans font-semibold uppercase text-warning">Propietario: {Estacion.usuarioEncargado==null?'Tú':Estacion.usuarioEncargado}</p>
                    </div>
                    <div className="py-2 flex items-center justify-around">
                        <ModalUsuariosAsociados idEstacion={Estacion.id!} numero_Asociados={Estacion.numero_Asociados!} />
                        <p className="flex items-center space-x-1"><AiTwotoneEnvironment className="text-red-500 text-md" /><small className="font-sans">{Estacion.departamento} / {Estacion.ciudad}</small></p>
                    </div>
                    <Accordion variant="splitted">
                        <AccordionItem title="Detalles" indicator={
                            <CgDetailsMore />
                        }>
                            {Estacion.detalles}
                        </AccordionItem>
                    </Accordion>
                </CardBody>
                <CardFooter className="lg:space-x-2 justify-around flex">
                    <div className='flex'>
                        <ModalEliminar id={Estacion.id!} />
                        <ModalEditar id={Estacion.id!} />
                    </div>
                    <ModalAsociarEstacion idEstacion={Estacion.id!} />
                </CardFooter>
            </Card>
        </>
    )
}

