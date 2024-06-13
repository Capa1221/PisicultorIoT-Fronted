import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

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

interface HibernaderoListProps {
  hibernaderos: Hibernadero[];
  setSelectedHibernadero: (id: string | null) => void;
  onOpen: () => void;
}

const HibernaderoList: React.FC<HibernaderoListProps> = ({ hibernaderos, setSelectedHibernadero, onOpen }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {hibernaderos.map((hibernadero) => (
        <Card key={hibernadero.id} className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{hibernadero.nombre}</h4>
            <small className="text-default-500">{`${hibernadero.ciudad}, ${hibernadero.departamento}`}</small>
            <p className="text-default-500">{hibernadero.detalles}</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt={hibernadero.nombre}
              className="object-cover rounded-xl"
              src={hibernadero.imagen || 'https://www.berger.ca/es/recursos-para-los-productores/tips-y-consejos-practicos/cultivar-invernadero-ventajas-desventajas/'}
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
  );
};

export default HibernaderoList;
