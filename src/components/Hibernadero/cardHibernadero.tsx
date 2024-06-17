import { useState } from 'react'
import { Accordion, AccordionItem, Button, Card, CardBody, CardFooter, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from "@nextui-org/react";
import { CgDetailsMore } from "react-icons/cg";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { BiPencil, BiTrash } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { ModalAsociarUsuario } from './modalAsociarUsuario';
import { ModalEditar } from './modalEditar';
import { ModalEliminar } from './modalEliminar';

export const CardHibernadero = () => {
    const [selectedModal, setSelectedModal] = useState<null | "editar" | "eliminar">(null);

  const handleOptionModal = (key: string) => {
    switch (key) {
      case "edit":
        setSelectedModal("editar");
        break;
      case "delete":
        setSelectedModal("eliminar");
        break;
      default:
        break;
    }
  };
    return (
        <>
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
                    <div className="py-2 flex items-center self-center">
                        <span><AiTwotoneEnvironment className="text-red-500" /></span>
                        <small className="font-sans">Norte de Santander / Pamplona</small>
                    </div>
                    <Accordion variant="splitted">
                        <AccordionItem title="Detalles" indicator={
                            <CgDetailsMore />
                        }>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam, aliquid dicta eum est laboriosam tenetur. Harum fugiat neque non cupiditate vero pariatur, ratione minima eos assumenda iusto, rem animi.
                        </AccordionItem>
                    </Accordion>
                </CardBody>
                <CardFooter className="space-x-2 justify-around flex">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                color="primary"
                                variant="ghost"
                                startContent={<SlOptionsVertical className="text-2xl" />}
                            >
                                Opciones
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" onAction={handleOptionModal}>
                            <DropdownItem
                                className="text-warning"
                                key="edit"
                                startContent={<BiPencil className="text-2xl" />}
                                showDivider
                            >
                                Editar
                            </DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger"
                                startContent={<BiTrash className="text-2xl" />}>
                                Eliminar
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <ModalAsociarUsuario />
                </CardFooter>
            </Card>
            {/* Renderiza el modal de edición si está seleccionado */}
            {selectedModal === "editar" && (
                <ModalEditar />
            )}
            {selectedModal === "eliminar" && (
                <ModalEliminar />
            )}
        </>
    )
}

