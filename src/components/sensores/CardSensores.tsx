import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { MdSensors } from "react-icons/md";
import { BsCheckAll } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgData } from "react-icons/cg";
import { ModalEliminarSensor } from "./ModalEliminarSensor";
import { ModalEditarSensor } from "./ModalEditarSensor";
import { SensorInterface } from "../../services/interfaces";
import { ModalConfiguracionSensor } from "./ModalConfiguracionSensor";

export const CardSensores = (sensor: SensorInterface) => {
  return (
    <>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <MdSensors className="text-5xl text-warning" />
          <div className="flex flex-col">
            <p className="text-md font-semibold text-xl uppercase ">{sensor.nombre}</p>
            <div className="flex justify-around items-center space-x-5">
              <p className="text-small text-default-500">{sensor.ubicacion}</p>
              <Button
                className={`w-min p-1 ${sensor.config ? 'text-primary' : 'text-danger'} font-sans font-semibold`}
                color={sensor.config ? 'primary' : 'danger'}
                variant="bordered"
                startContent={<BsCheckAll className="text-2xl" />}
              >
                {sensor.config ? 'Configurado' : 'No Configurado'}
              </Button>
            </div>

          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex justify-around items-center">
            <p>
              {sensor.descripcion}
            </p>
            <ModalConfiguracionSensor id={sensor.id!}/>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="justify-around">
          <div className="space-x-2">
            <ModalEliminarSensor id={sensor.id!} />
            <ModalEditarSensor id={sensor.id!} />
          </div>
          <Link to={`/dashboard/Sensor/Grafica/${sensor.id}`}><Button color="primary" startContent={<CgData className="text-xl" />}>Ver datos</Button></Link>
        </CardFooter>
      </Card>
    </>
  )
}
