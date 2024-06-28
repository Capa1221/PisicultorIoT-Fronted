import React from "react";
import { Link, User, Chip, Button } from "@nextui-org/react";
import { CustomCheckboxProps } from "../../services/interfaces";
import { crearUsuarioEstacion } from "../../services/Usuario-Estacion-controller";

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ user }) => {

  const token = sessionStorage.getItem("authToken");

  const handleAsociarUsuario = async () => {
    try {
      if (token) {
        const response = await crearUsuarioEstacion(user.id, user.idEstacion, token);
        if (response.status == 200) {
          alert("Usuario Asociado");
          window.location.reload();
        } else {
          alert("error al asociar el usuario");
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
            <Link isExternal href={user.url} size="sm">
              @{user.username}
            </Link>
          }
          name={user.name}
        />
        <div className="flex flex-col items-end gap-1">
          <span className="text-tiny text-default-500">{user.role}</span>
          <Chip size="sm" variant="flat">
            {user.status}
          </Chip>
        </div>
      </div>
    </Button>
  );
};
