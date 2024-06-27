import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { GrFormAdd } from "react-icons/gr";

export const ModalUserAdd = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" className="mb-2" startContent={<GrFormAdd />}>A�adir Usuario</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">A�adir Usuario</ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  type="text"
                  label="Usuario"
                />
                <Input
                  isRequired
                  type="text"
                  label="Nombre"
                />
                <Input
                  isRequired
                  type="email"
                  label="Email"
                />
                <Input
                  isRequired
                  type="password"
                  label="Clave"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
