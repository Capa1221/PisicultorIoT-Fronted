import React, { useState } from "react";
import { Link, User, Button } from "@nextui-org/react";
import { CustomCheckboxProps } from "../../services/interfaces";
import { borrarUsuarioEstacion, crearUsuarioEstacion } from "../../services/Usuario-Estacion-controller";
import { BiUserMinus, BiUserPlus } from "react-icons/bi";

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ user,asociar }) => {

  const token = sessionStorage.getItem("authToken");
  const [loading,setLoading] = useState<boolean>(false);

  const handleAsociarUsuario = async () => {
    try {
      setLoading(true);
      if (token) {
        if (user.eliminar && user.eliminar != null) {
          const response = await borrarUsuarioEstacion(user.id, token);
          if (response.status == 200) {
            alert("Usuario Desasociado");
            window.location.reload();
          } else {
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
      setLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <Button variant="light" className="my-4 w-full" onClick={handleAsociarUsuario} isLoading={loading} endContent={asociar!=true?<BiUserPlus className="text-2xl text-primary" />:<BiUserMinus className="text-2xl text-danger"/>}>
      <div className="w-full flex justify-between gap-2">
        <User
          avatarProps={{ size: "md", src: user.avatar }}
          description={
            (user.name != null) ? <Link isExternal size="sm">
              {user.username}
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
