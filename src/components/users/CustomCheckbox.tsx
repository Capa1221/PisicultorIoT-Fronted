import React from "react";
import { Link, User, Button } from "@nextui-org/react";
import { CustomCheckboxProps } from "../../services/interfaces";
import { borrarUsuarioEstacion, crearUsuarioEstacion } from "../../services/Usuario-Estacion-controller";

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ user }) => {

  const token = sessionStorage.getItem("authToken");

  const handleAsociarUsuario = async () => {
    try {
      if (token) {
        if (user.eliminar && user.eliminar != null) {
          const response = await borrarUsuarioEstacion(user.id,token);
          if(response.status==200){
            alert("Usuario Desasociado");
            window.location.reload();
          }else{
            alert("error al desasociar el usuario");
          }
        } else {
          const response = await crearUsuarioEstacion(user.id, user.idEstacion, token);
          if (response.status == 200) {
            alert("Usuario Asociado");
            window.location.reload();
          } else {
            alert("error al asociar el usuario");
          }
        }
      } else {
        console.error("Error Token");
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <Button variant="light" className="my-4 w-full" onClick={handleAsociarUsuario}>
      <div className="w-full flex justify-between gap-2">
        <User
          avatarProps={{ size: "md", src: user.avatar }}
          description={
            (user.name != null) ? <Link isExternal size="sm">
              @{user.username}
            </Link> : ''
          }
          name={user.name}
        />
        <div className="flex flex-col items-end gap-1">
        </div>
      </div>
    </Button>
  );
};
