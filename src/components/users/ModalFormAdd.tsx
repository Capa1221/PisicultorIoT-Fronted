import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { aceptarUsuario } from "../../services/Formulario-Sesion";

export const ModalFormAdd = ({ id }: { id: string }) => {

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken")!;

  const handleCrearUsuario = async () => {
    try {
      if (token) {
        const response = await aceptarUsuario(id, token);
        if (response.status === 200) {
          onClose();
          window.location.reload();
        }
      } else {
        console.error("token invalido");
      }
    } catch (error) {
      console.error("Error al crear el formulario", error);
    }
  };

  return (
    <>
      <Button color="primary" startContent={<AiOutlineUserAdd className="text-xl" />} variant="light" onPress={onOpen}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">Añadir Usuario</ModalHeader>
              <ModalBody className="space-y-1">
                <div className="flex space-x-1">
                  <p>
                    ¿Estas seguro que deseas añadir al usuario?
                  </p>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={handleCrearUsuario}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
