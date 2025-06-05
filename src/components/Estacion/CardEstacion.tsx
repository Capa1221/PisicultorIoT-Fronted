import {
    Accordion,
    AccordionItem,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image
  } from "@nextui-org/react";
  import { CgDetailsMore } from "react-icons/cg";
  import { AiTwotoneEnvironment } from "react-icons/ai";
  import {
    ModalAsociarEstacion,
    ModalEditar,
    ModalEliminar
  } from "..";
  import { EstacionInterface } from "../../services/interfaces";
  import { ModalUsuariosAsociados } from "./ModalUsuariosAsociados";
  
  export const CardEstacion = (Estacion: EstacionInterface) => {
    const estadoActivo = Estacion.estado === "1";
  
    return (
      <Card className="w-full max-w-sm mx-auto shadow-md border">
        <CardHeader className="pb-0 pt-4 px-4 flex-col items-center">
          <h4 className="font-bold text-lg text-center uppercase text-green-800">
            {Estacion.nombre || "Sin nombre"}
          </h4>
          <Image
            alt="Imagen estación"
            className="object-cover rounded-xl mt-2"
            src={Estacion.imagen || "/imagen-defecto.jpg"}
            width={270}
            isZoomed
          />
        </CardHeader>
  
        <CardBody className="text-gray-700 space-y-2 px-4 py-3">
          <div className="flex flex-col gap-2 text-center">
            <p className="uppercase text-sm font-semibold">
              Tipo: {Estacion.descripcionTipoCultivo || "No especificado"}
            </p>
            <p
              className={`text-white text-xs font-bold rounded px-2 py-1 w-fit mx-auto ${
                estadoActivo ? "bg-green-700" : "bg-red-700"
              }`}
            >
              {estadoActivo ? "ACTIVO" : "INACTIVO"}
            </p>
            <p className="uppercase text-sm text-warning">
              Propietario:{" "}
              {Estacion.usuarioEncargado ? Estacion.usuarioEncargado : "Tú"}
            </p>
          </div>
  
          <div className="flex flex-col items-center gap-2">
            <ModalUsuariosAsociados
              idEstacion={Estacion.id!}
              numero_Asociados={Estacion.numero_Asociados!}
            />
            <p className="flex items-center gap-1 text-sm text-gray-600">
              <AiTwotoneEnvironment className="text-red-500" />
              {Estacion.departamento} / {Estacion.ciudad}
            </p>
          </div>
  
          <Accordion variant="splitted">
            <AccordionItem
              title="Detalles"
              indicator={<CgDetailsMore />}
            >
              {Estacion.detalles || "Sin detalles disponibles"}
            </AccordionItem>
          </Accordion>
        </CardBody>
  
        <CardFooter className="flex justify-between px-4 py-2">
          <div className="flex gap-2">
            <ModalEliminar id={Estacion.id!} />
            <ModalEditar id={Estacion.id!} />
          </div>
          <ModalAsociarEstacion idEstacion={Estacion.id!} />
        </CardFooter>
      </Card>
    );
  };
  