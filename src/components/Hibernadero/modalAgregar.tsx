import React, { useState } from "react";
import { Modal, Input, Textarea, ModalFooter, ModalContent, ModalBody, ModalHeader, Button, Image, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Select, SelectItem } from "@nextui-org/react";
import { BiImage } from "react-icons/bi";

interface NewHibernaderoModalProps {
  isOpen: boolean;
  onClose: () => void;
  newHibernadero: any;
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
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Agregar Nuevo Hibernadero</ModalHeader>
            <ModalBody>
              <div className="flex items-center space-x-2 m-0">
                <Input
                  type="file"
                  name="image"
                  startContent={<BiImage className="text-2xl" />}
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <div className="flex place-content-end">
                    <Image
                      width={100}
                      alt="Vista previa de la imagen"
                      src={imagePreview}
                    />
                  </div>
                )}
              </div>
              <Input
                label="Nombre"
                name="nombre"
                value={newHibernadero.nombre}
                onChange={handleChangeNuevo}
                width="100%"
              />
              <Select
                label="Cultivo"
                placeholder="Seleccione el tipo de cultivo"
              >
                <SelectItem key={"0"} >
                  Helllouuda
                </SelectItem>
                <SelectItem key={"1"} >
                  Helllouudad
                </SelectItem>
                <SelectItem key={"2"} >
                  Helllouudas
                </SelectItem>
                <SelectItem key={"3"} >
                  Helllouudaa
                </SelectItem>
              </Select>
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
