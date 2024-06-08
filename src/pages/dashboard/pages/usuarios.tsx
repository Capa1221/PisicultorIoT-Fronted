import { Button } from "@nextui-org/react";
import React from "react";
import DataTable from "react-data-table-component";
import { RiLineChartLine } from "react-icons/ri";

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
  },
  {
    name: "Correo",
    selector: (row) => row.correo,
  },
  {
    name: "Rol",
    selector: (row) => row.rol,
  },
  {
    name: "Acciones",
    cell: (row) => (
      <Button auto flat color="primary" icon={<RiLineChartLine />}>
        Ver
      </Button>
    ),
  },
];

const data = [
  {
    id: 1,
    nombre: "Juan Pérez",
    correo: "juan.perez@example.com",
    rol: "Administrador",
  },
  {
    id: 2,
    nombre: "María García",
    correo: "maria.garcia@example.com",
    rol: "Usuario",
  },
  {
    id: 3,
    nombre: "Carlos López",
    correo: "carlos.lopez@example.com",
    rol: "Usuario",
  },
  {
    id: 4,
    nombre: "Ana Fernández",
    correo: "ana.fernandez@example.com",
    rol: "Moderador",
  },
];

export const Usuarios = () => {
  return (
    <div>
      <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Usuarios <span className="text-primary">IoT</span>
        </h1>
      </header>
      <div className="p-8">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};
