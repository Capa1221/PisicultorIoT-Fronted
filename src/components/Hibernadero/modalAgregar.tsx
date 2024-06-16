import React, { useState } from "react";
import { Modal, Input, Textarea, ModalFooter, ModalContent, ModalBody, ModalHeader, Button, Image, Select, SelectItem } from "@nextui-org/react";
import { BiImage, BiRename } from "react-icons/bi";
import { HiSelector } from "react-icons/hi";

interface NewHibernaderoModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleChangeNuevo: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleGuardarNuevo: () => void;
}

const initialFormState = {
  nombre: '',
  cultivo: '',
  ciudad: '',
  departamento: '',
  detalles: '',
};

const NewHibernaderoModal: React.FC<NewHibernaderoModalProps> = ({
  isOpen,
  onClose,
  handleChangeNuevo,
  handleGuardarNuevo,
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formState, setFormState] = useState(initialFormState);
  const [isImageValid, setIsImageValid] = useState(true); // Estado para manejar la validez de la imagen

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif']; // Tipos de archivo de imagen válidos
      const isImage = validImageTypes.includes(file.type);
      
      setIsImageValid(isImage); // Actualizar estado de validez de la imagen

      if (isImage) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null); // Limpiar la previsualización si no es una imagen válida
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    handleChangeNuevo(e); // Propagar el cambio al manejador externo si es necesario
  };

  const handleSelectChange = (value: string) => {
    setFormState({
      ...formState,
      cultivo: value,
    });
  };

  const handleClose = () => {
    setImagePreview(null); // Limpiar la previsualización de la imagen al cerrar
    setFormState(initialFormState); // Reiniciar el estado del formulario
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="justify-center">Agregar Nuevo Cultivo</ModalHeader>
            <ModalBody>
              <div className="flex items-center space-x-2 m-0">
                <Input
                  type="file"
                  name="image"
                  label="Imagen del Cultivo"
                  isRequired
                  isInvalid={!isImageValid} // Marcar como inválido si la imagen no es válida
                  errorMessage="Por favor, seleccione un archivo de imagen válido (JPEG, PNG, GIF)."
                  startContent={<BiImage className="text-2xl" />}
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <div className="flex place-content-end">
                    <Image
                      isZoomed
                      width={100}
                      alt="Imagen del Cultivo"
                      src={imagePreview}
                    />
                  </div>
                )}
              </div>
              <Input
                label="Nombre del Cultivo"
                name="nombre"
                isRequired
                placeholder="Nombre del cultivo"
                value={formState.nombre}
                onChange={handleInputChange}
                startContent={<BiRename className="text-2xl" />}
              />
              <Select
                label="Tipo de Cultivo"
                isRequired
                placeholder="Seleccione el tipo de cultivo"
                onChange={(key) => handleSelectChange(key.toString())}
                startContent={<HiSelector className="text-2xl text-gray-500 " />}
              >
                <SelectItem key="Helllouuda">Helllouuda</SelectItem>
                <SelectItem key="Helllouudad">Helllouudad</SelectItem>
                <SelectItem key="Helllouudas">Helllouudas</SelectItem>
                <SelectItem key="Helllouudaa">Helllouudaa</SelectItem>
              </Select>
              <Input
                label="Ciudad"
                name="ciudad"
                placeholder="Ciudad del cultivo"
                value={formState.ciudad}
                isRequired
                onChange={handleInputChange}
                width="100%"
              />
              <Input
                label="Departamento"
                name="departamento"
                value={formState.departamento}
                onChange={handleInputChange}
                width="100%"
                isRequired
                placeholder="Departamento del cultivo"
              />
              <Textarea
                label="Detalles"
                name="detalles"
                value={formState.detalles}
                onChange={handleInputChange}
                width="100%"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={handleClose}>
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
