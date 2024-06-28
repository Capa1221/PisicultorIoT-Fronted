import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { SensorInterface } from "../../services/interfaces";
import { handleInputChange } from "../../utils/utilsHandle";
import { BiNote, BiUser } from "react-icons/bi";
import { crearSensor } from "../../services/sensor-controller";
import { SelectEstacion } from "./SelectEstacion";

export const ModalAgregarSensor = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken")!;
  const [sensor, setSensor] = useState<SensorInterface>({
    idHibernadero: "",
    nombre: "",
    descripcion: "",
    config: false,
  });

  const handleCrearSensor = async () => {
    try {
      if (token) {
        sensor.idHibernadero = sessionStorage.getItem("idAso")!;
        const response = await crearSensor(sensor, token);
        if (response.status === 200) {
          onClose();
          window.location.reload();
        }
      } else {
        console.error("Token inválido");
      }
    } catch (error) {
      console.error("Error al crear el sensor", error);
    }
  };

  return (
    <>
      <Button onClick={onOpen} color="primary" startContent={<GrAddCircle className="text-xl" />}>Agregar Sensor</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Agregar Sensor</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                name="nombre"
                label="Nombre"
                isRequired
                value={sensor.nombre}
                onChange={(e) => handleInputChange(e, setSensor, sensor)}
                startContent={<BiUser className="text-2xl" />}
              />
              <Input
                type="text"
                name="descripcion"
                label="Descripción"
                isRequired
                value={sensor.descripcion}
                onChange={(e) => handleInputChange(e, setSensor, sensor)}
                startContent={<BiNote className="text-2xl" />}
              />
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <SelectEstacion/>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onClick={handleCrearSensor}>
                Guardar
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};
