import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ScrollShadow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { RiSensorLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { obtenerSensoresPorEstacion } from "../../services/sensor-controller";
import { SensorInterface } from "../../services/interfaces";

export const ModalSensoresEstacion = ({ idEstacion }: { idEstacion: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sensores, setSensores] = useState<SensorInterface[]>([]);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchSensores = async () => {
      try {
        if (token) {
          const response = await obtenerSensoresPorEstacion(idEstacion, token);
          if (response.status === 200) {
            setSensores(response.data);
          } else {
            alert("Error al obtener los sensores");
          }
        } else {
          console.error("Token no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener los sensores", error);
      }
    };

    fetchSensores();
  }, [idEstacion, token]);

  const navigate = useNavigate();
  return (
    <>
      <Button onClick={onOpen} color="primary" startContent={<RiSensorLine />}>Sensores Asociados</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="sm" placement="center">
        <ModalContent>
          <ModalHeader>Sensores Asociados</ModalHeader>
          <ModalBody>
            <ScrollShadow className="w-full h-auto space-y-6">
              {sensores.map((sensor) => (
                <Button
                  key={sensor.id}
                  variant="light"
                  className="w-full"
                  startContent={<RiSensorLine className="text-xl" />}
                  onClick={() => { navigate("/dashboard/Sensor/Grafica") }}
                >
                  {sensor.nombre}
                </Button>
              ))}
            </ScrollShadow>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
