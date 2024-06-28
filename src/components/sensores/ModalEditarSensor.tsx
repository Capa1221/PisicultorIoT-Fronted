import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { SensorInterface } from "../../services/interfaces";
import { handleInputChange } from "../../utils/utilsHandle";
import { BiNote, BiUser } from "react-icons/bi";
import { crearSensor, obtenerSensorPorId } from "../../services/sensor-controller";
import { SelectEstacion } from "./SelectEstacion";

export const ModalEditarSensor = ({id}:{id:string}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken")!;
  const [sensor, setSensor] = useState<SensorInterface>({
    idHibernadero: "",
    nombre: "",
    descripcion: "",
    config: false,
  });

  useEffect(() => {
    const fetchDataSensor = async () => {
      try {
        if (token) {
          const response = await obtenerSensorPorId(id, token);
          if (response.status == 200) {
            setSensor(response.data);
          } else {
            console.error("error fetchDataSensor")
          }
        } else {
          console.error("error token");
        }
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchDataSensor();
  }, [token]);

  const handleEditarSensor = async () => {
    try {
      if (token) {
        sensor.idHibernadero = sessionStorage.getItem("idAso")!;
        const response = await crearSensor(sensor, token);
        if (response.status === 200) {
          onClose();
          window.location.reload();
          sessionStorage.removeItem("idAso");
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
                <SelectEstacion />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onClick={handleEditarSensor}>
                Actualizar
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};
