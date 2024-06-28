import { useEffect, useState } from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { EstacionInterface } from "../../services/interfaces";
import { decodeToken } from "../../utils/utilsToken";
import { buscarEstacionesPropietario } from "../../services/Estaciones";

export const SelectEstacion = () => {

  const token = sessionStorage.getItem("authToken")!;
  const decodetoken = decodeToken(token);
  const [estacionesUser, setEstacionesUser] = useState<EstacionInterface[]>([]);

  useEffect(() => {
    const fetchEstacionesUser = async () => {
      try {
        if (token) {
          const response = await buscarEstacionesPropietario(token, decodetoken.idUsuario);
          if (response.status === 200) {
            setEstacionesUser(response.data);
          } else {
            console.error("Error al obtener las estaciones del usuario");
          }
        } else {
          console.error("Token no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener las estaciones del usuario", error);
      }
    };
    fetchEstacionesUser();
  }, [token, decodetoken.idUsuario]);

  return (
    <>
      <Select
        items={estacionesUser}
        label="Asigne la estacion"
        variant="bordered"
        classNames={{
          label: "group-data-[filled=true]:-translate-y-5",
          trigger: "min-h-16",
          listboxWrapper: "max-h-[400px]",
        }}
        listboxProps={{
          itemClasses: {
            base: [
              "rounded-md",
              "text-default-500",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-default-100",
              "dark:data-[hover=true]:bg-default-50",
              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          },
        }}
        popoverProps={{
          classNames: {
            base: "before:bg-default-200",
            content: "p-0 border-small border-divider bg-background",
          },
        }}
        renderValue={(estacionesUser) => {
          return estacionesUser.map((e) => (
            <div key={e.key} className="flex items-center gap-2">
              <Avatar
                alt={e.data?.nombre}
                className="flex-shrink-0"
                size="sm"
                src={e.data!.imagen}
              />
              <div className="flex flex-col">
                <span>{e.data?.nombre}</span>
                <span className="text-default-500 text-tiny">({e.data?.descripcionTipoCultivo})</span>
              </div>
            </div>
          ));
        }}
      >
        {(estacion) => (
          <SelectItem key={estacion.id!} textValue={estacion.nombre}>
            <div className="flex gap-2 items-center">
              <Avatar alt={estacion.nombre} className="flex-shrink-0" size="sm" src={estacion.imagen} />
              <div className="flex flex-col">
                <span className="text-small">{estacion.nombre}</span>
                <span className="text-tiny text-default-400">{estacion.descripcionTipoCultivo}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
    </>
  )
}
