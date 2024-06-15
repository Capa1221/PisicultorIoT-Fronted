import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { buscarTodosLosHibernaderos, eliminarHibernadero, buscarHibernaderoPorId, actualizarHibernadero, insertarHibernadero } from "../../../services/hibernadero-controller";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import ActionModalHibernadero from "../../../components/modals/ActionModalHibernadero";
import HibernaderoList from "../../../components/Hibernadero/listHibernadero";
import EditHibernaderoModal from "../../../components/Hibernadero/modalEdital";
import NewHibernaderoModal from "../../../components/Hibernadero/modalAgregar";

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
  const [newHibernadero, setNewHibernadero] = useState<Hibernadero>({
    id: '',
    imagen: '',
    ciudad: '',
    departamento: '',
    nombre: '',
    encargado: '',
    detalles: '',
    estado: ''
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isNewOpen, onOpen: onNewOpen, onClose: onNewClose } = useDisclosure();
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
          // L�gica para asociar un usuario al hibernadero
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error al ejecutar acci�n ${action} en hibernadero ${selectedHibernadero}`, error);
    }
  };

  const cargarHibernadero = async (id: string) => {
    try {
      const response = await buscarHibernaderoPorId(id, token!);
      if (response.data) {
        setEditHibernadero(response.data); // Cargar el hibernadero en el estado de edici�n
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
      // Actualizar la lista de hibernaderos despu�s de eliminar
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
      const response = await actualizarHibernadero(editHibernadero, token!);
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

  const handleGuardarNuevo = async () => {
    if (!newHibernadero) return;

    // Aseg�rate de que los campos no sean null antes de enviar la solicitud
    const hibernaderoToSave = {
      ...newHibernadero,
      ciudad: newHibernadero.ciudad || '',
      departamento: newHibernadero.departamento || '',
      nombre: newHibernadero.nombre || '',
      encargado: newHibernadero.encargado || '',
      detalles: newHibernadero.detalles || '',
      estado: newHibernadero.estado || ''
    };

    try {
      const response = await insertarHibernadero(hibernaderoToSave, token!);
      console.log("Hibernadero creado:", response.data);
      onNewClose();
      const fetchResponse = await buscarTodosLosHibernaderos(token!);
      if (fetchResponse.data) {
        setHibernaderos(fetchResponse.data);
      } else {
        console.error("Response data is empty");
      }
    } catch (error) {
      console.error("Error al crear hibernadero", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editHibernadero) return;
    const { name, value } = e.target;
    setEditHibernadero({ ...editHibernadero, [name]: value });
  };

  const handleChangeNuevo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewHibernadero({ ...newHibernadero, [name]: value });
  };

  return (
    <>
      <HeaderDashboard mensaje="Tus Invernaderos " />
      <div className="p-8">
        <CommentSection mensaje="Bienvenido a la sección de gestión de sus invernaderos. En esta área, encontrará datos completos sobre cada invernadero y podrá ejecutar tareas como la modificación, la eliminación o la asociación de usuarios. Adéntrate en tus invernaderos para mantener la supervisión y la regulación de todas las operaciones."/>
        <Button onPress={onNewOpen} color="primary" className="mb-4">
          Agregar Hibernadero
        </Button>
        <HibernaderoList hibernaderos={hibernaderos} setSelectedHibernadero={setSelectedHibernadero} onOpen={onOpen} />
      </div>
      <ActionModalHibernadero
        isOpen={isOpen}
        onOpenChange={onClose}
        onAction={handleAction}
        children={undefined}
      />
      <EditHibernaderoModal
        isOpen={editHibernadero !== null}
        onClose={() => setEditHibernadero(null)}
        editHibernadero={editHibernadero}
        handleChange={handleChange}
        handleGuardarEdicion={handleGuardarEdicion}
      />
      <NewHibernaderoModal
        isOpen={isNewOpen}
        onClose={onNewClose}
        newHibernadero={newHibernadero}
        handleChangeNuevo={handleChangeNuevo}
        handleGuardarNuevo={handleGuardarNuevo}
      />
    </>
  );
};

export default Hibernaderos;
