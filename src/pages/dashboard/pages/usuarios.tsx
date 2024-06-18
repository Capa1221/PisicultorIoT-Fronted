import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { BiEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";


export const Usuarios = () => {

  return (
    <div>
      <HeaderDashboard mensaje="Usuarios en el sistema" />
      <CommentSection mensaje="Bienvenido a la sección de administración de usuarios del sistema. Aquí puedes ver la lista de usuarios registrados, realizar acciones como visualizar detalles adicionales." />
      <div className="my-8">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn className="text-center uppercase">Usuario</TableColumn>
            <TableColumn className="text-center uppercase">Nombre</TableColumn>
            <TableColumn className="text-center uppercase">Email</TableColumn>
            <TableColumn className="text-center uppercase">Opciones</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="4">
              <TableCell className="text-center">William_Howard</TableCell>
              <TableCell className="text-center">William Howard</TableCell>
              <TableCell className="text-center">WilliamHoward@gmail.com</TableCell>
              <TableCell className="flex place-content-center">
                <Tooltip content="Edit user">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <Button color="warning" startContent={<BiEdit className="text-xl" />} variant="light"></Button>
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <Button color="danger" startContent={<FaRegTrashAlt className="text-xl" />} variant="light"></Button>
                  </span>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell className="text-center">William_Howard</TableCell>
              <TableCell className="text-center">William Howard</TableCell>
              <TableCell className="text-center">WilliamHoward@gmail.com</TableCell>
              <TableCell className="flex place-content-center">
                <Tooltip content="Edit user">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <Button color="warning" startContent={<BiEdit className="text-xl" />} variant="light"></Button>
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <Button color="danger" startContent={<FaRegTrashAlt className="text-xl" />} variant="light"></Button>
                  </span>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell className="text-center">William_Howard</TableCell>
              <TableCell className="text-center">William Howard</TableCell>
              <TableCell className="text-center">WilliamHoward@gmail.com</TableCell>
              <TableCell className="flex place-content-center">
                <Tooltip content="Edit user">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <Button color="warning" startContent={<BiEdit className="text-xl" />} variant="light"></Button>
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <Button color="danger" startContent={<FaRegTrashAlt className="text-xl" />} variant="light"></Button>
                  </span>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell className="text-center">William_Howard</TableCell>
              <TableCell className="text-center">William Howard</TableCell>
              <TableCell className="text-center">WilliamHoward@gmail.com</TableCell>
              <TableCell className="flex place-content-center">
                <Tooltip content="Edit user">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <Button color="warning" startContent={<BiEdit className="text-xl" />} variant="light"></Button>
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <Button color="danger" startContent={<FaRegTrashAlt className="text-xl" />} variant="light"></Button>
                  </span>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

