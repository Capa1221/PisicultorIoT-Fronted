import { Divider, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { BiEdit } from "react-icons/bi";
import { FcDeleteRow } from "react-icons/fc";

export const Propiedades = () => {
  return (
    <>
      <HeaderDashboard mensaje={"Ajustes del sistema"} />
      <div className="p-8">
        <CommentSection mensaje={"Aquí puedes gestionar los ajustes del sistema relacionados con los sensores de los invernaderos. Puedes configurar nuevos ajustes, buscar configuraciones específicas y modificar los ajustes existentes."} />
        <div>
          <Divider className="mb-2 " />
          <h1 className="text-2xl font-semibold text-warning">Configuraci�n de Tipos de cultivos</h1>
          <div className="mt-2">
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>STATUS</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell className="flex space-x-1">
                    <Tooltip content="Edit user">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <BiEdit />
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Delete user">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <FcDeleteRow />
                      </span>
                    </Tooltip>
                  </TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                  <TableCell className="flex space-x-1">
                    <Tooltip content="Edit user">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <BiEdit />
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Delete user">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <FcDeleteRow />
                      </span>
                    </Tooltip>
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Jane Fisher</TableCell>
                  <TableCell className="flex space-x-1">
                    <Tooltip content="Edit user">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <BiEdit />
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Delete user">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <FcDeleteRow />
                      </span>
                    </Tooltip>
                  </TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                  <TableCell className="flex space-x-1">
                    <Tooltip content="Edit user">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <BiEdit />
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Delete user">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <FcDeleteRow />
                      </span>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
