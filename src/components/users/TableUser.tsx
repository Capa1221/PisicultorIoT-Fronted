import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { BiEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { InputPasswordUser } from "./InputPasswordUser";

export const TableUser = () => {

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="text-center uppercase">Usuario</TableColumn>
          <TableColumn className="text-center uppercase">Nombre</TableColumn>
          <TableColumn className="text-center uppercase">Email</TableColumn>
          <TableColumn className="text-center uppercase w-48">Clave</TableColumn>
          <TableColumn className="text-center uppercase">Opciones</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="4">
            <TableCell className="text-center">William_Howard</TableCell>
            <TableCell className="text-center">William Howard</TableCell>
            <TableCell className="text-center">WilliamHoward@gmail.com</TableCell>
            <TableCell className="text-center w-10">
              <InputPasswordUser />
            </TableCell>
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
            <TableCell className="text-center w-10">
              <InputPasswordUser />
            </TableCell>
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
            <TableCell className="text-center w-10">
              <InputPasswordUser />
            </TableCell>
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
            <TableCell className="text-center w-10">
              <InputPasswordUser />
            </TableCell>
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
    </>
  )
}
