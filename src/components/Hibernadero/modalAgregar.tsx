import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, Image, Textarea } from "@nextui-org/react";
import { BiImage, BiRename } from "react-icons/bi";
import { HiSelector } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCity, FaMapPin } from "react-icons/fa";

const ModalAgregar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isImageValid, setIsImageValid] = useState<boolean>(true); 

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result as string);
          setIsImageValid(true);
        };
        reader.readAsDataURL(file);
      } else {
        setIsImageValid(false);
        setImagePreview(null);
      }
    }
  };

  const handleModalClose = () => {
    
    onClose();
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" startContent={<IoIosAddCircleOutline className="text-xl"/>}>Agregar Cultivo</Button>
      <Modal isOpen={isOpen} onClose={handleModalClose} placement="center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Agregar Cultivo</ModalHeader>
          <ModalBody>
            <div className="flex">
            <Input
              type="file"
              name="image"
              label="Imagen del Cultivo"
              isRequired
              isInvalid={!isImageValid}
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
              startContent={<BiRename className="text-2xl" />}
            />
            <Select
              label="Tipo de Cultivo"
              isRequired
              placeholder="Seleccione el tipo de cultivo"
              startContent={<HiSelector className="text-2xl" />}
            >
              <SelectItem key="Helllouuda">Helllouuda</SelectItem>
              <SelectItem key="Helllouudad">Helllouudad</SelectItem>
              <SelectItem key="Helllouudas">Helllouudas</SelectItem>
              <SelectItem key="Helllouudaa">Helllouudaa</SelectItem>
            </Select>
            <div className="flex space-x-2">
            <Input
              label="Ciudad"
              name="ciudad"
              isRequired
              width="100%"
              startContent={<FaCity className="text-2xl" />}
            />
            <Input
              label="Departamento"
              name="departamento"
              isRequired
              width="100%"
              startContent={<FaMapPin className="text-2xl" />}
            />
            </div>
            <Textarea
              label="Detalles"
              name="detalles"
              width="100%"
              startContent={<FaCity className="text-2xl" />}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cerrar
            </Button>
            <Button color="primary" onPress={onClose}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAgregar;
