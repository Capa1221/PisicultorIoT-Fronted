import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { PropsModalEditar } from "./PropsModalEditar";
import { PropsModalEliminar } from "./PropsModalEliminar";

export const PropsTableTiposCultivos = () => {
  return (
    <><Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="text-center uppercase">Nombre Propiedad</TableColumn>
        <TableColumn className="text-center uppercase">Opciones</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="4">
          <TableCell className="text-center">William Howard</TableCell>
          <TableCell className="flex place-content-center">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <PropsModalEditar />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <PropsModalEliminar />
              </span>
            </Tooltip>
          </TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell className="text-center">William Howard</TableCell>
          <TableCell className="flex place-content-center">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <PropsModalEditar />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <PropsModalEliminar />
              </span>
            </Tooltip>
          </TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell className="text-center">William Howard</TableCell>
          <TableCell className="flex place-content-center">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <PropsModalEditar />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <PropsModalEliminar />
              </span>
            </Tooltip>
          </TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell className="text-center">William Howard</TableCell>
          <TableCell className="flex place-content-center">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <PropsModalEditar />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <PropsModalEliminar />
              </span>
            </Tooltip>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table></>
  )
}
