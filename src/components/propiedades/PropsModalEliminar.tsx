import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { eliminarTipoCultivo } from "../../services/Tipo-Cultivo";

export const PropsModalEliminar = ({ id }: { id: string }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken");

  const handleDeleteTipoCultivo = async () => {
    try {
      if (token) {
        const response = await eliminarTipoCultivo(id, token);
        if (response.status == 200) {
          onClose();
          window.location.reload()
        }
      } else {
        console.error("Error token");
      }
    } catch (error) {
      console.error("Error fetch user", error);
    }
  }

  return (
    <>
      <Button onPress={onOpen} variant="light" color="danger" startContent={<FaRegTrashAlt className="text-xl" />}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Eliminar Tipo de Cultivo</ModalHeader>
              <ModalBody>
                <p>
                  ¿Estás seguro de eliminar el Tipo de Cultivo?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={handleDeleteTipoCultivo}>
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
