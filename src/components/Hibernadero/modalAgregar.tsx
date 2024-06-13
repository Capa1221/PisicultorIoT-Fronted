import React from "react";
import { Modal, Input, Textarea, ModalFooter, ModalContent, ModalBody, ModalHeader, Button } from "@nextui-org/react";

interface NewHibernaderoModalProps {
  isOpen: boolean;
  onClose: () => void;
  newHibernadero: Hibernadero;
  handleChangeNuevo: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleGuardarNuevo: () => void;
}

const NewHibernaderoModal: React.FC<NewHibernaderoModalProps> = ({
  isOpen,
  onClose,
  newHibernadero,
  handleChangeNuevo,
  handleGuardarNuevo,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Agregar Nuevo Hibernadero</ModalHeader>
            <ModalBody>
              <Input
                label="Nombre"
                name="nombre"
                value={newHibernadero.nombre}
                onChange={handleChangeNuevo}
                width="100%"
              />
              <Input
                label="Ciudad"
                name="ciudad"
                value={newHibernadero.ciudad}
                onChange={handleChangeNuevo}
                width="100%"
              />
              <Input
                label="Departamento"
                name="departamento"
                value={newHibernadero.departamento}
                onChange={handleChangeNuevo}
                width="100%"
              />
              <Textarea
                label="Detalles"
                name="detalles"
                value={newHibernadero.detalles}
                onChange={handleChangeNuevo}
                width="100%"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => { close(); onClose(); }}>
                Cancelar
              </Button>
              <Button color="primary" onClick={handleGuardarNuevo}>
                Guardar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default NewHibernaderoModal;
