import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import ActionModal from "../../../components/modals/ActionModalHibernadero";
import { useDisclosure } from "@nextui-org/react";

interface Hibernadero {
  id: number;
  nombre: string;
  ubicacion: string;
  imagen: string;
  descripcion: string;
}

const hibernaderos: Hibernadero[] = [
  {
    id: 1,
    nombre: "Hibernadero de Papa",
    ubicacion: "Pamplona - Norte de Santander",
    imagen:
      "https://static.vecteezy.com/system/resources/previews/013/618/940/large_2x/rows-of-young-bushes-potato-plantation-farming-and-agriculture-agroindustry-agribusiness-growing-food-vegetables-growing-potatoes-in-plastic-wrap-tunnels-in-early-spring-greenhouse-effect-photo.jpg",
    descripcion: "Un lugar ideal para el cultivo de papa.",
  },
  {
    id: 2,
    nombre: "Hibernadero de Yuca",
    ubicacion: "Cacota - Norte de Santander",
    imagen:
      "https://www.agrosavia.co/media/0n0g5qrg/sol-mara-regino-herna-ndez.jpg",
    descripcion: "Espacio especializado para la producción de yuca.",
  },
  // Añade más hibernaderos si es necesario
];

const Hibernaderos: React.FC = () => {
  const [selectedHibernadero, setSelectedHibernadero] = useState<number | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleAction = (action: string) => {
    if (selectedHibernadero === null) return;

    switch (action) {
      case "edit":
        console.log(`Editar hibernadero con id: ${selectedHibernadero}`);
        // Lógica para editar el hibernadero
        break;
      case "delete":
        console.log(`Eliminar hibernadero con id: ${selectedHibernadero}`);
        // Lógica para eliminar el hibernadero
        break;
      case "associate":
        console.log(`Asociar usuario al hibernadero con id: ${selectedHibernadero}`);
        // Lógica para asociar un usuario al hibernadero
        break;
      default:
        break;
    }
  };

  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Tus Invernaderos <span className="text-primary">Jorge</span>
        </h1>
      </header>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {hibernaderos.map((hibernadero) => (
            <Card key={hibernadero.id} className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{hibernadero.nombre}</h4>
                <small className="text-default-500">
                  {hibernadero.ubicacion}
                </small>
                <p className="text-default-500">{hibernadero.descripcion}</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt={hibernadero.nombre}
                  className="object-cover rounded-xl"
                  src={hibernadero.imagen}
                  width={270}
                />
                <div className="flex justify-around mt-4">
                  <Button
                    onPress={() => {
                      setSelectedHibernadero(hibernadero.id);
                      onOpen();
                    }}
                  >
                    Opciones
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <ActionModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onAction={handleAction}
      />
    </>
  );
};

export default Hibernaderos;
