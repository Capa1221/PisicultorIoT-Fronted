import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { PropsModalEditar } from "./PropsModalEditar";
import { PropsModalEliminar } from "./PropsModalEliminar";
import { PropsModalAgregar } from "./PropsModalAgregar";
import { useEffect, useState } from "react";
import { TipoCultivoInterface } from "../../services/interfaces";
import { obtenerTodosLosTiposCultivo } from "../../services/Tipo-Cultivo";

export const PropsTableTiposCultivos = () => {

  const [ TiposCultivos, setTiposCultivos ] = useState<TipoCultivoInterface[]>([]);
  const token = sessionStorage.getItem("authToken")!;

  useEffect(()=>{
    const fetchApi = async ()=>{
      try {
        if(token){
          const response = await obtenerTodosLosTiposCultivo(token);
          setTiposCultivos(response.data);
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
    <PropsModalAgregar/>
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="text-center uppercase">Nombre</TableColumn>
        <TableColumn className="text-center uppercase">Descripcion</TableColumn>
        <TableColumn className="text-center uppercase">Opciones</TableColumn>
      </TableHeader>
      <TableBody>
        {TiposCultivos.map((TipoCultivo)=>(
          <TableRow key={TipoCultivo.id}>
          <TableCell className="text-center">{TipoCultivo.nombre}</TableCell>
          <TableCell className="text-center w-min">{TipoCultivo.descripcion}</TableCell>
          <TableCell className="flex place-content-center">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <PropsModalEditar id={TipoCultivo.id!} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <PropsModalEliminar id={TipoCultivo.id!} />
              </span>
            </Tooltip>
          </TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table></>
  )
}
