import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, Image, Textarea } from "@nextui-org/react";
import { BiImage, BiRename } from "react-icons/bi";
import { HiSelector } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCity, FaMapPin } from "react-icons/fa";
import { useImageHandler } from "../../utils/utilsHandle";

export const ModalAgregar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { imagePreview, isImageValid, handleImageChange } = useImageHandler();

  return (
    <>
      <Button onPress={onOpen} color="primary" startContent={<IoIosAddCircleOutline className="text-xl" />}>Agregar Cultivo</Button>
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          <ModalHeader className="flex flex-col text-center">Agregar Estacion</ModalHeader>
          <ModalBody>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-500">Imagen</span>
              <div className="flex items-center space-x-1">
              <input
                type="file"
                name="image"
                className={`border ${!isImageValid ? 'border-red-600' : 'border-gray-300'} px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500`}
                onChange={handleImageChange}
              />
              {!isImageValid && (
                <div className="flex items-center">
                  <BiImage className="text-2xl text-red-600" />
                  <p className="text-sm text-red-600 ml-2">Por favor, seleccione un archivo de imagen válido (JPEG, PNG, GIF)</p>
                </div>
              )}
              {imagePreview && (
                <div className="flex place-content-end">
                  <Image
                    isZoomed
                    width={100}
                    alt="Imagen del Cultivo"
                    src={imagePreview}
                    className="rounded-lg"
                  />
                </div>
              )}
              </div>
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
