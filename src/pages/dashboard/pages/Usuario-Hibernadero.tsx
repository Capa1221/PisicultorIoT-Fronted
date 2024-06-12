import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  buscarHibernaderosUsuario,
  crearUsuarioHibernadero,
  borrarUsuarioHibernadero,
} from "../../../services/usuario-hibernadero-controller";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";

interface UsuarioHibernadero {
  id: string;
  idHibernadero: string;
  idUsuario: string;
}

const UsuarioHibernaderoComponent: React.FC = () => {
  const [asociaciones, setAsociaciones] = useState<UsuarioHibernadero[]>([]);
  const [usuarioId, setUsuarioId] = useState<string>("");
  const [hibernaderoId, setHibernaderoId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchAsociaciones = async () => {
      if (token) {
        try {
          const response = await buscarHibernaderosUsuario(token,"1");
          setAsociaciones(response.data);
        } catch (error) {
          console.error("Failed to fetch asociaciones:", error);
        }
      } else {
        console.error("Token is null");
      }
    };

    fetchAsociaciones();
  }, [token]);

  const handleCreateAsociacion = async () => {
    if (usuarioId && hibernaderoId) {
      try {
        if (token != null) {
          const response = await crearUsuarioHibernadero(
            usuarioId,
            hibernaderoId,
            token
          );
          setAsociaciones([...asociaciones, response.data]);
          setIsOpen(false);
        }
      } catch (error) {
        console.error("Failed to create asociacion:", error);
      }
    }
  };

  const handleDeleteAsociacion = async (id: string) => {
    if (token) {
      try {
        await borrarUsuarioHibernadero(id, token);
        setAsociaciones(
          asociaciones.filter((asociacion) => asociacion.id !== id)
        );
      } catch (error) {
        console.error("Failed to delete asociacion:", error);
      }
    }
  };

  return (
    <div>
      <HeaderDashboard mensaje="Asociaciones Usuario-Hibernadero"/>
      <div className="p-8">
        <CommentSection mensaje="Aquí puedes gestionar las asociaciones entre usuarios e hibernaderos.
          Puedes crear nuevas asociaciones, buscar por usuario o hibernadero, y
          eliminar asociaciones existentes."/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {asociaciones.map((asociacion) => (
            <Card key={asociacion.id}>
              <CardHeader>
                <h3>ID: {asociacion.id}</h3>
              </CardHeader>
              <CardBody>
                <p>Usuario: {asociacion.idUsuario}</p>
                <p>Hibernadero: {asociacion.idHibernadero}</p>
                <Button onClick={() => handleDeleteAsociacion(asociacion.id)}>
                  Eliminar
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h4>Crear Nueva Asociación</h4>
          <Input
            label="ID Usuario"
            placeholder="Ingresa el ID del usuario"
            value={usuarioId}
            onChange={(e) => setUsuarioId(e.target.value)}
          />
          <Input
            label="ID Hibernadero"
            placeholder="Ingresa el ID del hibernadero"
            value={hibernaderoId}
            onChange={(e) => setHibernaderoId(e.target.value)}
          />
          <Button color="primary" onClick={handleCreateAsociacion}>
            Crear
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default UsuarioHibernaderoComponent;
