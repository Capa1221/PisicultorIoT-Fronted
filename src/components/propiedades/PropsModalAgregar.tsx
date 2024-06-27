import { VscSymbolProperty } from "react-icons/vsc";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useState } from "react";
import { TipoCultivoInterface } from "../../services/interfaces";
import { guardarTipoCultivo } from "../../services/Tipo-Cultivo";
import { handleInputChange } from "../../utils/utils";
import { BiNote, BiUser } from "react-icons/bi";

export const PropsModalAgregar = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken");
  const [tipoCultivo, setTipoCultivo] = useState<TipoCultivoInterface>({
    nombre: "",
    descripcion: ""
  });

  const handleCrearTipoCultivo = async () => {
    try {
      if (token) {
        const response = await guardarTipoCultivo(tipoCultivo, token);
        if (response.status == 200) {
          onClose();
          window.location.reload();
        }
      } else {
        console.error("token invalido");
      }
    } catch (error) {
      console.error("Error al crear el Tipo Cultivo", error);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" startContent={<VscSymbolProperty className="text-xl" />} className="mb-2">Agregar Propiedad</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Agregar Propiedad</ModalHeader>
              <ModalBody>
              <Input
                  type="text"
                  name="nombre"
                  label="Nombre"
                  isRequired
                  value={tipoCultivo.nombre}
                  onChange={(e) => handleInputChange(e, setTipoCultivo, tipoCultivo)}
                  startContent={<BiUser className="text-2xl" />}
                />
                <Input
                  type="text"
                  name="descripcion"
                  label="Descripcion"
                  isRequired
                  value={tipoCultivo.descripcion}
                  onChange={(e) => handleInputChange(e, setTipoCultivo, tipoCultivo)}
                  startContent={<BiNote className="text-2xl" />}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={handleCrearTipoCultivo}>
                  Agregar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )

}
