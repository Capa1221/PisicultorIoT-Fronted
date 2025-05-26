import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BiEdit, BiNote, BiRename } from "react-icons/bi";
import { actualizarTipoCultivo, obtenerTipoCultivoPorId } from "../../services/Tipo-Cultivo";
import { TipoCultivoInterface } from "../../services/interfaces";
import { handleInputChange } from "../../utils/utils";

export const PropsModalEditar = ({ id }: { id: string }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken")!;
  const [tipoCultivo, setTipoCultivo] = useState<TipoCultivoInterface>({
    id: "",
    nombre: "",
    descripcion: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const response = await obtenerTipoCultivoPorId(id, token);
          if (response.status == 200) {
            setTipoCultivo(response.data);

          }
        } else {
          console.error("Error token");
        }
      } catch (error) {
        console.error("Error fetch Tipo Cultivo", error);
      }
    };
    fetchUser();
  }, [token]);

  const handleEditarTipoCultivo = async () => {
    try {
      if (token) {
        const response = await actualizarTipoCultivo(tipoCultivo, token);
        console.log(response);
        if (response.status == 200) {
          onClose();
          window.location.reload()
        }
      } else {
        console.error("Error token");
      }
    } catch (error) {
      console.error("Error fetch Tipo Cultivo", error);
    }
  }

  return (
    <>
      <Button onPress={onOpen} variant="light" color="warning" startContent={<BiEdit className="text-xl" />}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">Editar Propiedad</ModalHeader>
              <ModalBody className="space-y-4">
                <Input
                  type="text"
                  name="nombre"
                  label="Nombre"
                  isRequired
                  value={tipoCultivo.nombre}
                  onChange={(e) => handleInputChange(e, setTipoCultivo, tipoCultivo)}
                  startContent={<BiRename className="text-2xl" />}
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
                <Button color="primary" onPress={handleEditarTipoCultivo}>
                  Actualizar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
