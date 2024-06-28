import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { BiRename } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCity, FaMapPin } from "react-icons/fa";
import { useState } from "react";
import { EstacionInterface } from "../../services/interfaces";
import { insertarEstacion } from "../../services/Estaciones";
import { handleInputChange } from "../../utils/utils";
import { SelectTipoEstacion } from "./SelectTipoEstacion";

export const ModalAgregar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken")!;
  const [estacion, setEstacion] = useState<EstacionInterface>({
    imagen: "",
    ciudad: "",
    departamento: "",
    nombre: "",
    encargado: "",
    detalles: "",
    estado: "",
    idTipoCultivo: "",
    descripcionTipoCultivo: "",
    numero_Asociados: "",
  });
  //const { imagePreview, isImageValid, handleImageChange } = useImageHandler();

  const handleAgregarEstacion = async () => {
    try {
      const response = await insertarEstacion(estacion, token);
      if (response.status === 200) {
        onClose();
        window.location.reload();
      }
    } catch (error) {
      console.error("Error al crear la estacion", error);
    }
  };


  return (
    <>
      <Button onPress={onOpen} color="primary" startContent={<IoIosAddCircleOutline className="text-xl" />}>Agregar</Button>
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          <ModalHeader className="flex flex-col text-center">Agregar Estacion</ModalHeader>
          <ModalBody>
            <input
              type="file"
              name="image"
              value={estacion.imagen}
              onChange={(e) => handleInputChange(e, setEstacion, estacion)}
            />
            <Input
              label="Nombre del Cultivo"
              name="nombre"
              isRequired
              value={estacion.nombre}
              onChange={(e) => handleInputChange(e, setEstacion, estacion)}
              startContent={<BiRename className="text-2xl" />}
            />
            <SelectTipoEstacion/>
            <div className="flex space-x-2">
              <Input
                label="Ciudad"
                name="ciudad"
                isRequired
                value={estacion.ciudad}
                onChange={(e) => handleInputChange(e, setEstacion, estacion)}
                width="100%"
                startContent={<FaCity className="text-2xl" />}
              />
              <Input
                label="Departamento"
                name="departamento"
                value={estacion.departamento}
                onChange={(e) => handleInputChange(e, setEstacion, estacion)}
                isRequired
                width="100%"
                startContent={<FaMapPin className="text-2xl" />}
              />
            </div>
            <Textarea
              label="Detalles"
              name="detalles"
              value={estacion.detalles}
              onChange={(e) => handleInputChange(e, setEstacion, estacion)}
              width="100%"
              startContent={<FaCity className="text-2xl" />}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cerrar
            </Button>
            <Button color="primary" onPress={handleAgregarEstacion}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
