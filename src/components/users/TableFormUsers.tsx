import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { AiOutlineUserAdd } from "react-icons/ai";

export const TableFormUsers = () => {

  return (
    <>
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
              <Tooltip content="Add user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Button color="primary" startContent={<AiOutlineUserAdd className="text-xl" />} variant="light"></Button>
                </span>
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell className="text-center">William_Howard</TableCell>
            <TableCell className="text-center">William Howard</TableCell>
            <TableCell className="text-center">WilliamHoward@gmail.com</TableCell>
            <TableCell className="flex place-content-center">
              <Tooltip content="Add user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Button color="primary" startContent={<AiOutlineUserAdd className="text-xl" />} variant="light"></Button>
                </span>
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell className="text-center">William_Howard</TableCell>
            <TableCell className="text-center">William Howard</TableCell>
            <TableCell className="text-center">WilliamHoward@gmail.com</TableCell>
            <TableCell className="flex place-content-center">
              <Tooltip content="Add user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Button color="primary" startContent={<AiOutlineUserAdd className="text-xl" />} variant="light"></Button>
                </span>
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow key="7">
            <TableCell className="text-center">William_Howard</TableCell>
            <TableCell className="text-center">William Howard</TableCell>
            <TableCell className="text-center">WilliamHoward@gmail.com</TableCell>
            <TableCell className="flex place-content-center">
              <Tooltip content="Add user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Button color="primary" startContent={<AiOutlineUserAdd className="text-xl" />} variant="light"></Button>
                </span>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
