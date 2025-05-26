import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { BsTrash } from "react-icons/bs";
import { borrarSensor } from "../../services/sensor-controller";

export const ModalEliminarSensor = ({ id }: { id: string }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken");

  const handleEliminarSensor = async () => {
    try {
      if (token) {
        const response = await borrarSensor(id, token);
        if (response.status == 200) {
          onClose();
          window.location.reload();
        } else {
          console.error("error handleEliminarSensor");
        }
      } else {
        console.log("error token");
      }
    } catch (error) {
      console.error("error ", error);
    }
  }

  return (
    <>
      <Button color="danger" variant="light" startContent={<BsTrash className="text-2xl" />} onPress={onOpen}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Eliminar Sensor</ModalHeader>
              <ModalBody>
                <p className="text-center">¿Estas seguro de eliminar el sensor?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={handleEliminarSensor}>
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
