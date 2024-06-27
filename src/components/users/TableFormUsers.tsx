import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FormularioInterface } from "../../services/interfaces";
import { useEffect, useState } from "react";
import { obtenerTodosLosFormularios } from "../../services/Formulario-Sesion";
import { InputPasswordUser } from "./InputPasswordUser";

export const TableFormUsers = () => {
  const [formulariosSistema, setFormulariosSistema] = useState<FormularioInterface[]>([]);
  const token = sessionStorage.getItem("authToken");

  useEffect(()=>{
    const fetchApi = async ()=>{
      try {
        if(token){
          const response = await obtenerTodosLosFormularios(token);
          setFormulariosSistema(response.data);
        }else{
          console.error("error token");
        }
      } catch (error) {
        console.error("fetch error users",error)
      }
    }
    fetchApi();
  },[token]);

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="text-center uppercase">Usuario</TableColumn>
          <TableColumn className="text-center uppercase">Nombres</TableColumn>
          <TableColumn className="text-center uppercase">Email</TableColumn>
          <TableColumn className="text-center uppercase">Telefono</TableColumn>
          <TableColumn className="text-center uppercase">Observacion</TableColumn>
          <TableColumn className="text-center uppercase">Clave</TableColumn>
          <TableColumn className="text-center uppercase">{""}</TableColumn>
        </TableHeader>
        <TableBody>
          {formulariosSistema.map((formularioSistema)=>(
            <TableRow key={formularioSistema.id}>
            <TableCell className="text-center">{formularioSistema.usuario}</TableCell>
            <TableCell className="text-center">{formularioSistema.nombres}</TableCell>
            <TableCell className="text-center">{formularioSistema.email}</TableCell>
            <TableCell className="text-center">{formularioSistema.telefono}</TableCell>
            <TableCell className="text-center">{formularioSistema.observacion}</TableCell>
            <TableCell className="justify-center"><InputPasswordUser claveUser={formularioSistema.clave}/></TableCell>
            <TableCell className="flex place-content-center">
              <Tooltip content="Add user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Button color="primary" startContent={<AiOutlineUserAdd className="text-xl" />} variant="light"></Button>
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
