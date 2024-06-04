import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Listbox,
  ListboxItem,
  ModalProps,
} from "@nextui-org/react";

interface ActionModalProps extends ModalProps {
  onAction: (action: string) => void;
  onOpenChange: (action:boolean)=>void;
}

const ActionModalHibernadero: React.FC<ActionModalProps> = ({
  isOpen,
  onOpenChange,
  onAction,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Seleccione una opción</ModalHeader>
        <ModalBody>
          <Listbox
            aria-label="Actions"
            onAction={(key) => {
              onAction(key);
              onOpenChange(false);
            }}
          >
            <ListboxItem key="edit">Editar</ListboxItem>
            <ListboxItem key="delete" className="text-danger" color="danger">
              Eliminar
            </ListboxItem>
            <ListboxItem key="associate">Asociar Usuario</ListboxItem>
          </Listbox>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={() => onOpenChange(false)}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ActionModalHibernadero;
