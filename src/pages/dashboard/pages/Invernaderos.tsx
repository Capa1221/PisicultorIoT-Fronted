import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Modal,
  Input,
  Textarea,
  ModalFooter,
  ModalContent,
  ModalBody,
  ModalHeader,
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import {
  buscarTodosLosHibernaderos,
  eliminarHibernadero,
  buscarHibernaderoPorId,
  actualizarHibernadero,
} from "../../../services/hibernadero-controller";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import ActionModalHibernadero from "../../../components/modals/ActionModalHibernadero";

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

const Hibernaderos: React.FC = () => {
  const [hibernaderos, setHibernaderos] = useState<Hibernadero[]>([]);
  const [selectedHibernadero, setSelectedHibernadero] = useState<string | null>(null);
  const [editHibernadero, setEditHibernadero] = useState<Hibernadero | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await buscarTodosLosHibernaderos(token);
          if (response.data) {
            setHibernaderos(response.data);
          } else {
            console.error("Response data is empty");
          }
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch hibernaderos:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleAction = async (action: string) => {
    if (!selectedHibernadero) return;

    try {
      switch (action) {
        case "edit":
          console.log(`Editar hibernadero con id: ${selectedHibernadero}`);
          await cargarHibernadero(selectedHibernadero);
          onOpen();
          break;
        case "delete":
          console.log(`Eliminar hibernadero con id: ${selectedHibernadero}`);
          await handleEliminar(selectedHibernadero);
          break;
        case "associate":
          console.log(`Asociar usuario al hibernadero con id: ${selectedHibernadero}`);
          // Lógica para asociar un usuario al hibernadero
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error al ejecutar acción ${action} en hibernadero ${selectedHibernadero}`, error);
    }
  };

  const cargarHibernadero = async (id: string) => {
    try {
      const response = await buscarHibernaderoPorId(id, token!);
      if (response.data) {
        setEditHibernadero(response.data); // Cargar el hibernadero en el estado de edición
      } else {
        console.error("Response data is empty");
      }
    } catch (error) {
      console.error(`Error al cargar hibernadero ${id}`, error);
    }
  };

  const handleEliminar = async (id: string) => {
    try {
      await eliminarHibernadero(id, token!);
      // Actualizar la lista de hibernaderos después de eliminar
      const response = await buscarTodosLosHibernaderos(token!);
      if (response.data) {
        setHibernaderos(response.data);
      } else {
        console.error("Response data is empty");
      }
    } catch (error) {
      console.error(`Error al eliminar hibernadero ${id}`, error);
    }
  };

  const handleGuardarEdicion = async () => {
    if (!editHibernadero || !editHibernadero.id) return;

    try {
      const response = await actualizarHibernadero(editHibernadero.id, editHibernadero, token!);
      console.log("Hibernadero actualizado:", response.data);
      onClose();
      const fetchResponse = await buscarTodosLosHibernaderos(token!);
      if (fetchResponse.data) {
        setHibernaderos(fetchResponse.data);
      } else {
        console.error("Response data is empty");
      }
    } catch (error) {
      console.error("Error al actualizar hibernadero", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editHibernadero) return;
    const { name, value } = e.target;
    setEditHibernadero({ ...editHibernadero, [name]: value });
  };

  return (
    <>
      <HeaderDashboard mensaje="Tus Invernaderos " />
      <div className="p-8">
        <CommentSection mensaje=" Bienvenido a la sección de administración de tus invernaderos. Aquí puedes ver
          información detallada sobre cada uno de ellos y realizar acciones como editar,
          eliminar o asociar usuarios. Explora tus invernaderos y mantén todo bajo control."/>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {hibernaderos.map((hibernadero) => (
            <Card key={hibernadero.id} className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{hibernadero.nombre}</h4>
                <small className="text-default-500">{`${hibernadero.ciudad}, ${hibernadero.departamento}`}</small>
                <p className="text-default-500">{hibernadero.detalles}</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt={hibernadero.nombre}
                  className="object-cover rounded-xl"
                  src={hibernadero.imagen || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.berger.ca%2Fes%2Frecursos-para-los-productores%2Ftips-y-consejos-practicos%2Fcultivar-invernadero-ventajas-desventajas%2F&psig=AOvVaw1RLTEx0Qz7g9Ds2-Wvqo0a&ust=1718331305320000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiCn4rB14YDFQAAAAAdAAAAABAI'}
                  width={270}
                />
                <div className="flex justify-around mt-4">
                  <Button
                    onPress={() => {
                      setSelectedHibernadero(hibernadero.id);
                      onOpen();
                    }}
                  >
                    Opciones
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <ActionModalHibernadero
        isOpen={isOpen}
        onOpenChange={onClose}
        onAction={handleAction} children={undefined} />
      <Modal
        isOpen={editHibernadero !== null}
        onClose={() => setEditHibernadero(null)}
      >
        <ModalContent>
          {(onClose) => (
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
                <Button color="danger" variant="light" onPress={() => { onClose(); setEditHibernadero(null); }}>
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
    </>
  );
};

export default Hibernaderos;
