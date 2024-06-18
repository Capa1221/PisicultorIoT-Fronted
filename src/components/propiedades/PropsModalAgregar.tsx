import { VscSymbolProperty } from "react-icons/vsc";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

export const PropsModalAgregar =()=> {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
      <>
      <Button onPress={onOpen} color="primary" startContent={<VscSymbolProperty className="text-xl"/>} className="mb-2">Agregar Propiedad</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Agregar Propiedad</ModalHeader>
              <ModalBody>
                <Input type="text" label="Tipo de propiedad"></Input>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={onClose}>
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
