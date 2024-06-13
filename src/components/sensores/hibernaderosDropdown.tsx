import React, { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { buscarTodosLosHibernaderos } from "../../services/hibernadero-controller";

interface Hibernadero {
  id: string;
  imagen: string;
  ciudad: string;
  departamento: string;
  nombre: string;
  encargado: string;
  detalles: string;
  estado: string;
}

interface HibernaderosDropdownProps {
  onSelectHibernadero: (id: string) => void;
}

const HibernaderosDropdown: React.FC<HibernaderosDropdownProps> = ({ onSelectHibernadero }) => {
  const [hibernaderos, setHibernaderos] = useState<Hibernadero[]>([]);
  const [selectedHibernaderoId, setSelectedHibernaderoId] = useState<string>("");

  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await buscarTodosLosHibernaderos(token);
          setHibernaderos(response.data || []);
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch hibernaderos:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleSelectHibernadero = (id: string) => {
    setSelectedHibernaderoId(id);
    onSelectHibernadero(id); // Llama a la función para pasar el ID del hibernadero seleccionado
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        label="Hibernadero"
        placeholder="Selecciona un hibernadero"
        className="max-full"
        onChange={(event) => setSelectedHibernaderoId(event.target.value)}
        value={selectedHibernaderoId}
      >
        {hibernaderos.map((hibernadero) => (
          <AutocompleteItem key={hibernadero.id} value={hibernadero.id}>
            {hibernadero.nombre}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};

export default HibernaderosDropdown;
