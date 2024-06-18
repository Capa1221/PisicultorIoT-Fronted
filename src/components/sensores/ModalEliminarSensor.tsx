import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { BsTrash } from "react-icons/bs";

export const ModalEliminarSensor = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="danger"  variant="bordered" startContent={<BsTrash className="text-2xl"/>} onPress={onOpen}></Button>
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
                <Button color="primary" onPress={onClose}>
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
