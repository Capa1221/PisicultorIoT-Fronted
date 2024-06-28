import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { BiTrash } from "react-icons/bi";
import { eliminarEstacion } from "../../services/Estaciones";

export const ModalEliminar = ({ id }: { id: string }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken");

  const handleDeleteHibernadero = async () => {
    try {
      if (token) {
        const response = await eliminarEstacion(id, token);
        if(response.status==200){
          onClose();
          window.location.reload();
        }
        
      }
    } catch (error) {
      console.error("Error al eliminar el hibernadero", error);
    }
  };

  return (
    <>
      <Button className="text-danger" onPress={onOpen} variant="light" startContent={<BiTrash className="text-2xl" />}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Eliminar Invernadero</ModalHeader>
              <ModalBody>
                <p>
                  �Confirma su intenci�n de borrar el hibernadero?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={handleDeleteHibernadero}>
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
