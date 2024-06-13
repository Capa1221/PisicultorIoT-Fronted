import React from "react";
import { Modal, Input, Textarea, ModalFooter, ModalContent, ModalBody, ModalHeader, Button } from "@nextui-org/react";
interface Hibernadero {
  id: string;
  imagen: string;
  ciudad: string;
  departamento: string;
  nombre: string;
  encargado: string;
  detalles: string;
  estado: string;
}
interface EditHibernaderoModalProps {
  isOpen: boolean;
  onClose: () => void;
  editHibernadero: Hibernadero | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleGuardarEdicion: () => void;
}

const EditHibernaderoModal: React.FC<EditHibernaderoModalProps> = ({
  isOpen,
  onClose,
  editHibernadero,
  handleChange,
  handleGuardarEdicion,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Editar Hibernadero</ModalHeader>
            <ModalBody>
              <Input
                label="Nombre"
                name="nombre"
                value={editHibernadero?.nombre || ""}
                onChange={handleChange}
                width="100%"
              />
              <Input
                label="Ciudad"
                name="ciudad"
                value={editHibernadero?.ciudad || ""}
                onChange={handleChange}
                width="100%"
              />
              <Input
                label="Departamento"
                name="departamento"
                value={editHibernadero?.departamento || ""}
                onChange={handleChange}
                width="100%"
              />
              <Textarea
                label="Detalles"
                name="detalles"
                value={editHibernadero?.detalles || ""}
                onChange={handleChange}
                width="100%"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => { close(); onClose(); }}>
                Cancelar
              </Button>
              <Button color="primary" onPress={handleGuardarEdicion}>
                Guardar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditHibernaderoModal;
