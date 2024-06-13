import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Input,
  Textarea,
  ModalFooter,
  ModalContent,
  ModalBody,
  ModalHeader,
} from "@nextui-org/react";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import {
  obtenerSensoresTodos,
  crearSensor,
  borrarSensor,
} from "../../../services/sensor-controller";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { buscarTodosLosHibernaderos } from "../../../services/hibernadero-controller";

interface Sensor {
  id: string;
  idHibernadero: string;
  nombre: string;
  descripcion: string;
  config: boolean;
}

interface NewSensor {
  idHibernadero: string;
  nombre: string;
  descripcion: string;
  config: boolean;
}

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

const Sensores = () => {
  const [sensores, setSensores] = useState<Sensor[]>([]);
  const [newSensor, setNewSensor] = useState<NewSensor>({
    idHibernadero: "", // Inicializamos el idHibernadero como cadena vacía
    nombre: "",
    descripcion: "",
    config: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [hibernaderos, setHibernaderos] = useState<Hibernadero[]>([]);
  const [selectedHibernaderoId, setSelectedHibernaderoId] = useState<string>(""); // Estado para el idHibernadero seleccionado
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const responseSensores = await obtenerSensoresTodos(token);
          const responseHibernaderos = await buscarTodosLosHibernaderos(token);
          setSensores(responseSensores.data || []);
          setHibernaderos(responseHibernaderos.data || []);
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleGuardarNuevo = async () => {
    try {
      if (!newSensor.nombre || !newSensor.descripcion || !newSensor.idHibernadero) {
        console.error("Nombre, descripción y hibernadero son campos obligatorios.");
        return;
      }
      const response = await crearSensor(newSensor, token!);
      console.log("Sensor creado:", response.data);
      setIsOpen(false);
      const fetchResponse = await obtenerSensoresTodos(token!);
      setSensores(fetchResponse.data);
      // Limpiar el estado del nuevo sensor después de crearlo
      setNewSensor({
        idHibernadero: "",
        nombre: "",
        descripcion: "",
        config: false,
      });
      setSelectedHibernaderoId("");
    } catch (error) {
      console.error("Error al crear sensor:", error);
    }
  };

  const handleEliminar = async (id: string) => {
    try {
      const response = await borrarSensor(id, token!);
      console.log("Sensor eliminado:", response.data.message);
      const fetchResponse = await obtenerSensoresTodos(token!);
      setSensores(fetchResponse.data);
    } catch (error) {
      console.error("Error al eliminar sensor:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewSensor((prevSensor) => ({
      ...prevSensor,
      [name]: value,
    }));
  };

  const handleSelectHibernadero = (id: string) => {
    setSelectedHibernaderoId(id);
    setNewSensor((prevSensor) => ({
      ...prevSensor,
      idHibernadero: id,
    }));
  };

  return (
    <>
      <HeaderDashboard mensaje="Sensores asociados" />
      <div className="p-8">
        <CommentSection mensaje="Aquí puedes gestionar los sensores asociados a los invernaderos. Puedes agregar nuevos sensores, buscar sensores específicos y eliminar sensores existentes." />
        <Button onPress={() => setIsOpen(true)} color="primary" className="mb-4">
          Agregar Sensor
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {sensores.map((sensor) => (
            <div
              key={sensor.id}
              className="p-4 border border-gray-200 rounded-lg bg-gray-200"
            >
              <h3 className="font-bold text-lg text-black">{sensor.nombre}</h3>
              <p className="text-sm text-black">{sensor.descripcion}</p>
              <div className="flex justify-end mt-2">
                <Button
                  onPress={() => handleEliminar(sensor.id)}
                  color="danger"
                  variant="light"
                >
                  Eliminar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Agregar Nuevo Sensor
          </ModalHeader>
          <ModalBody>
            <Input
              label="Nombre"
              name="nombre"
              value={newSensor.nombre}
              onChange={handleChange}
              width="100%"
            />
            <Textarea
              label="Descripción"
              name="descripcion"
              value={newSensor.descripcion}
              onChange={handleChange}
              width="100%"
            />
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Autocomplete
                label="Hibernadero"
                placeholder="Selecciona un hibernadero"
                className="max-full"
                onChange={(event) =>
                  handleSelectHibernadero(event.target.value)
                }
                value={selectedHibernaderoId}
              >
                {hibernaderos.map((hibernadero) => (
                  <AutocompleteItem
                    key={hibernadero.id}
                    value={hibernadero.id}
                  >
                    {hibernadero.nombre}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="light"
              onPress={() => setIsOpen(false)}
            >
              Cancelar
            </Button>
            <Button color="primary" onPress={handleGuardarNuevo}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Sensores;
