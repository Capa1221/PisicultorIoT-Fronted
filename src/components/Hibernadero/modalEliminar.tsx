import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea } from "@nextui-org/react";
import { BiTrash } from "react-icons/bi";

export const ModalEliminar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
    <Button className="text-danger" onPress={onOpen} variant="light" startContent={<BiTrash className="text-2xl" />}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Eliminar Invernadero</ModalHeader>
              <ModalBody>
                <p>
                ¿Confirma su intención de borrar el hibernadero?
                </p>
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
