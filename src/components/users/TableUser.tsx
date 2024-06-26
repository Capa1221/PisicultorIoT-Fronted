import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { BiEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { UserInterface } from "../../services/interfaces";
import { useEffect, useState } from "react";
import { buscarTodosLosUsuarios } from "../../services";

export const TableUser = () => {
  const [usersSistema, setUsersSistema] = useState<UserInterface[]>([]);
  const token = sessionStorage.getItem("authToken");

  useEffect(()=>{
    const fetchApi = async ()=>{
      try {
        if(token){
          const response = await buscarTodosLosUsuarios(token);
          setUsersSistema(response.data);
        }else{
          console.error("error token");
        }
      } catch (error) {
        console.error("fetch error users",error)
      }
    }
    fetchApi();
  },[token])

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
        {usersSistema.map((usersSistema) => (
          <TableRow key={usersSistema.id}>
          <TableCell className="text-center">{usersSistema.usuario}</TableCell>
          <TableCell className="text-center">{usersSistema.nombres}</TableCell>
          <TableCell className="text-center">{usersSistema.email}</TableCell>
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
        ))}
        </TableBody>
      </Table>
    </>
  )
}
