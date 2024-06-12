import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";


interface Sensor {
  id: string;
  nombre: string;
  descripcion: string;
}

const SensorCard: React.FC<{ sensor: Sensor }> = ({ sensor }) => {
  

  const handleVerDatos = () => {
    
  };

  return (
    <Card>
      <CardHeader>
        <h3>Sensor ID: {sensor.id}</h3>
      </CardHeader>
      <CardBody>
        <p>Tipo: {sensor.nombre}</p>
        <p>Ubicación: {sensor.descripcion}</p>
        <Button onClick={handleVerDatos}>Ver datos del sensor</Button>
      </CardBody>
    </Card>
  );
};

const Reports = () => {
  const [sensores, setSensores] = useState<Sensor[]>([]); // Aquí se especifica el tipo de la matriz

  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchSensores = async () => {
      if (token) {
        try {
          const response = await obtenerSensoresTodos(token);
          //setSensores(response);
        } catch (error) {
          console.error("Failed to fetch sensors:", error);
        }
      } else {
        console.error("Token is null");
      }
    };

    fetchSensores();
  }, [token]);

  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Sensores Asociados
        </h1>
      </header>
      <div className="p-4">
        {sensores.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
      </div>
    </>
  );
};

export default Reports;
function obtenerSensoresTodos(token: string) {
  throw new Error("Function not implemented.");
}

