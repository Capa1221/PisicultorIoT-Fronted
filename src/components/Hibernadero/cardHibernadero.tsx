import { Accordion, AccordionItem, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { CgDetailsMore } from "react-icons/cg";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { HibernaderoInterface } from "../../services/interfaces";
import { ModalAsociarUsuario, ModalEditar, ModalEliminar } from "..";

export const CardHibernadero = (hibernadero: HibernaderoInterface) => {

    return (
        <>
            <Card>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <h4 className="font-bold text-medium text-center uppercase text-green-800 py-2">{hibernadero.nombre}</h4>
                    <Image
                        alt="Card background"
                        className="object-cover rounded-3xl"
                        src={hibernadero.imagen}
                        width={270}
                        isZoomed
                    />
                </CardHeader>
                <CardBody className="text-gray-600 w-full">
                    <div className="flex justify-around uppercase font-bold items-center">
                        <p>Tipo: Hibernadero //falta el campo</p>
                        <p className={`text-white rounded-md p-1 ${hibernadero.estado === "1" ? 'bg-green-900' : 'bg-red-900'}`}>
                            {hibernadero.estado === "1" ? 'ACTIVO' : 'INACTIVO'}
                        </p>
                    </div>
                    <div className="py-2 flex items-center justify-around">
                        <p className="flex items-center space-x-1"><BiUser className="text-primary text-md" /><span className="font-sans font-semibold text-primary">2//falta el campo</span></p>
                        <p className="flex items-center space-x-1"><AiTwotoneEnvironment className="text-red-500 text-md" /><small className="font-sans">{hibernadero.departamento} / {hibernadero.ciudad}</small></p>
                    </div>
                    <Accordion variant="splitted">
                        <AccordionItem title="Detalles" indicator={
                            <CgDetailsMore />
                        }>
                            {hibernadero.detalles}
                        </AccordionItem>
                    </Accordion>
                </CardBody>
                <CardFooter className="lg:space-x-2 justify-around flex">
                    <div className='flex'>
                        <ModalEliminar />
                        <ModalEditar />
                    </div>
                    <ModalAsociarUsuario />
                </CardFooter>
            </Card>
        </>
    )
}

