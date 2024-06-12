import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { RiLineChartLine } from "react-icons/ri";
import { buscarTodosLosUsuarios } from "../../../services/usuario-controller";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";

interface Usuario {
  id: string;
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

const columns = [
  {
    name: "ID",
    selector: (row: Usuario) => row.id,
  },
  {
    name: "Nombre",
    selector: (row: Usuario) => row.nombres,
  },
  {
    name: "Correo",
    selector: (row: Usuario) => row.email,
  },
  {
    name: "Acciones",
    cell: () => (
      <Button color="primary">
        Ver<RiLineChartLine />
      </Button>
    ),
  },
];

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await buscarTodosLosUsuarios(token);
          setUsuarios(response.data);
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch usuarios:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <HeaderDashboard mensaje="Usuarios en el sistema"/>
      <div className="p-8">
        <CommentSection mensaje="Bienvenido a la sección de administración de usuarios del sistema. Aquí
          puedes ver la lista de usuarios registrados, sus roles, y realizar acciones
          como visualizar detalles adicionales."/>
        <DataTable columns={columns} data={usuarios} />
      </div>
    </div>
  );
};
