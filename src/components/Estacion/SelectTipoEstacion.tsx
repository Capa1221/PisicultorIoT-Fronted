import { Select, SelectItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { HiSelector } from 'react-icons/hi'
import { TipoCultivoInterface } from '../../services/interfaces'
import { obtenerTodosLosTiposCultivo } from '../../services/Tipo-Cultivo'

export const SelectTipoEstacion = () => {

  const [tiposEstacion, setTiposEstacion] = useState<TipoCultivoInterface[]>([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState<string | null>(null);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchTipos = async () => {
      try {
        if (token) {
          const response = await obtenerTodosLosTiposCultivo(token);
          if (response.status === 200) {
            setTiposEstacion(response.data);
          }
        } else {
          console.error("Error token");
        }
      } catch (error) {
        console.error("error fetchTipos", error);
      }
    }
    fetchTipos();
  }, [token]);

  const handleTipoSeleccionado = (id: string) => {
    setTipoSeleccionado(id);
    sessionStorage.setItem("tipoId", id);
  }

  return (
    <>
      <Select
        label="Tipo"
        isRequired
        placeholder="Tipo de estacion"
        onChange={(e) => handleTipoSeleccionado(e.target.value)}
        value={tipoSeleccionado || ''}
        startContent={<HiSelector className="text-2xl" />}
      >
        {tiposEstacion.map((tipoEstacion) => (
          <SelectItem key={tipoEstacion.id!} value={tipoEstacion.id}>{tipoEstacion.nombre}</SelectItem>
        ))}
      </Select>
    </>
  )
}
