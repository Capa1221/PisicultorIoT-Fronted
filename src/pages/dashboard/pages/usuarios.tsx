import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { RiLineChartLine } from "react-icons/ri";
import { buscarTodosLosUsuarios } from "../../../services/usuario-controller";

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
      <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Usuarios <span className="text-primary">IoT</span>
        </h1>
      </header>
      <div className="p-8">
        <p className="mb-8 text-lg">
          Bienvenido a la sección de administración de usuarios del sistema. Aquí
          puedes ver la lista de usuarios registrados, sus roles, y realizar acciones
          como visualizar detalles adicionales.
        </p>
        <DataTable columns={columns} data={usuarios} />
      </div>
    </div>
  );
};
