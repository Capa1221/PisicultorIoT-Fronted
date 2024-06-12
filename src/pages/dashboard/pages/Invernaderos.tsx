import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import ActionModal from "../../../components/modals/ActionModalHibernadero";
import { useDisclosure } from "@nextui-org/react";
import { buscarTodosLosHibernaderos } from "../../../services/hibernadero-controller";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";

interface Hibernadero {
  id: string;
  nombre: string;
  ubicacion: string;
  imagen: string;
  descripcion: string;
}

const Hibernaderos: React.FC = () => {
  const [hibernaderos, setHibernaderos] = useState<Hibernadero[]>([]);
  const [selectedHibernadero, setSelectedHibernadero] = useState<string | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const token = sessionStorage.getItem("authToken");
  const email = sessionStorage.getItem('userEmail');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await buscarTodosLosHibernaderos(token);
          //setHibernaderos(response.data);
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch hibernaderos:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleAction = (action: string) => {
    if (selectedHibernadero === null) return;

    switch (action) {
      case "edit":
        console.log(`Editar hibernadero con id: ${selectedHibernadero}`);
        // Lógica para editar el hibernadero
        break;
      case "delete":
        console.log(`Eliminar hibernadero con id: ${selectedHibernadero}`);
        // Lógica para eliminar el hibernadero
        break;
      case "associate":
        console.log(`Asociar usuario al hibernadero con id: ${selectedHibernadero}`);
        // Lógica para asociar un usuario al hibernadero
        break;
      default:
        break;
    }
  };

  return (
    <>
      <HeaderDashboard mensaje="Tus Invernaderos "/>
      <div className="p-8">
        <CommentSection mensaje="Bienvenido a la sección de administración de usuarios del sistema. Aquí
      puedes ver la lista de usuarios registrados, sus roles, y realizar acciones
      como visualizar detalles adicionales."/>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {hibernaderos.map((hibernadero) => (
            <Card key={hibernadero.id} className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{hibernadero.nombre}</h4>
                <small className="text-default-500">{hibernadero.ubicacion}</small>
                <p className="text-default-500">{hibernadero.descripcion}</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt={hibernadero.nombre}
                  className="object-cover rounded-xl"
                  src={hibernadero.imagen}
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
      <ActionModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onAction={handleAction} children={undefined}      />
    </>
  );
};

export default Hibernaderos;
