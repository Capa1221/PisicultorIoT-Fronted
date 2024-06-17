import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import ModalAgregar from "../../../components/Hibernadero/modalAgregar";
import { Accordion, AccordionItem, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { CgDetailsMore } from "react-icons/cg";
import { AiTwotoneEnvironment } from "react-icons/ai";


const Hibernaderos: React.FC = () => {
  return (
    <>
      <HeaderDashboard mensaje="Tus Cultivos " />
      <div className="p-2">
        <CommentSection mensaje="Bienvenido a la sección de gestión de sus cultivos. En esta área, encontrará datos completos sobre cada uno de sus cultivos y podrá ejecutar tareas como la modificación, la eliminación o la asociación de usuarios. Adéntrate en tus invernaderos para mantener la supervisión y la regulación de todas las operaciones." />
        <ModalAgregar />
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-medium text-center uppercase text-green-800 py-2">Hibernadero De Yuca</h4>
              <Image
                alt="Card background"
                className="object-cover rounded-3xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
                isZoomed
              />
            </CardHeader>
            <CardBody className="text-gray-600 w-full ">
              <div className="flex justify-around uppercase font-bold items-center">
                <p>Tipo: Hibernadero</p>
                <p className="text-white bg-green-900 rounded-md p-1">activo</p>
              </div>
              <div className="py-2 flex items-center self-center">
                <span><AiTwotoneEnvironment  className="text-red-500"/></span>
                <small className="font-sans">Norte de Santander / Pamplona</small>
              </div>
              <Accordion variant="splitted">
                <AccordionItem title="Detalles" indicator={
                  <CgDetailsMore/>
                }>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam, aliquid dicta eum est laboriosam tenetur. Harum fugiat neque non cupiditate vero pariatur, ratione minima eos assumenda iusto, rem animi.
                </AccordionItem>
              </Accordion>
            </CardBody>
            <CardFooter className="space-x-2 place-content-center flex">
              <Button color="warning" variant="bordered">Editar</Button>
              <Button color="danger" variant="bordered">Eliminar</Button>
              <Button color="success" variant="bordered">Sensores</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-medium text-center uppercase text-green-800 py-2">Hibernadero De Yuca</h4>
              <Image
                alt="Card background"
                className="object-cover rounded-3xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
                isZoomed
              />
            </CardHeader>
            <CardBody className="text-gray-600 w-full ">
              <div className="flex justify-around uppercase font-bold items-center">
                <p>Tipo: Hibernadero</p>
                <p className="text-white bg-red-700 rounded-md p-1">inactivo</p>
              </div>
              <div className="py-2 flex items-center self-center">
                <span><AiTwotoneEnvironment  className="text-red-500"/></span>
                <small className="font-sans">Norte de Santander / Pamplona</small>
              </div>
              <Accordion variant="splitted">
                <AccordionItem title="Detalles" indicator={
                  <CgDetailsMore/>
                }>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam, aliquid dicta eum est laboriosam tenetur. Harum fugiat neque non cupiditate vero pariatur, ratione minima eos assumenda iusto, rem animi.
                </AccordionItem>
              </Accordion>
            </CardBody>
            <CardFooter className="space-x-2 place-content-center flex">
              <Button color="warning" variant="bordered">Editar</Button>
              <Button color="danger" variant="bordered">Eliminar</Button>
              <Button color="success" variant="bordered">Sensores</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-medium text-center uppercase text-green-800 py-2">Hibernadero De Yuca</h4>
              <Image
                alt="Card background"
                className="object-cover rounded-3xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
                isZoomed
              />
            </CardHeader>
            <CardBody className="text-gray-600 w-full ">
              <div className="flex justify-around uppercase font-bold items-center">
                <p>Tipo: Hibernadero</p>
                <p className="text-white bg-green-900 rounded-md p-1">activo</p>
              </div>
              <div className="py-2 flex items-center self-center">
                <span><AiTwotoneEnvironment  className="text-red-500"/></span>
                <small className="font-sans">Norte de Santander / Pamplona</small>
              </div>
              <Accordion variant="splitted">
                <AccordionItem title="Detalles" indicator={
                  <CgDetailsMore/>
                }>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam, aliquid dicta eum est laboriosam tenetur. Harum fugiat neque non cupiditate vero pariatur, ratione minima eos assumenda iusto, rem animi.
                </AccordionItem>
              </Accordion>
            </CardBody>
            <CardFooter className="space-x-2 place-content-center flex">
              <Button color="warning" variant="bordered">Editar</Button>
              <Button color="danger" variant="bordered">Eliminar</Button>
              <Button color="success" variant="bordered">Sensores</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-medium text-center uppercase text-green-800 py-2">Hibernadero De Yuca</h4>
              <Image
                alt="Card background"
                className="object-cover rounded-3xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
                isZoomed
              />
            </CardHeader>
            <CardBody className="text-gray-600 w-full ">
              <div className="flex justify-around uppercase font-bold items-center">
                <p>Tipo: Hibernadero</p>
                <p className="text-white bg-red-700 rounded-md p-1">inactivo</p>
              </div>
              <div className="py-2 flex items-center self-center">
                <span><AiTwotoneEnvironment  className="text-red-500"/></span>
                <small className="font-sans">Norte de Santander / Pamplona</small>
              </div>
              <Accordion variant="splitted">
                <AccordionItem title="Detalles" indicator={
                  <CgDetailsMore/>
                }>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam, aliquid dicta eum est laboriosam tenetur. Harum fugiat neque non cupiditate vero pariatur, ratione minima eos assumenda iusto, rem animi.
                </AccordionItem>
              </Accordion>
            </CardBody>
            <CardFooter className="space-x-2 place-content-center flex">
              <Button color="warning" variant="bordered">Editar</Button>
              <Button color="danger" variant="bordered">Eliminar</Button>
              <Button color="success" variant="bordered">Sensores</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-medium text-center uppercase text-green-800 py-2">Hibernadero De Yuca</h4>
              <Image
                alt="Card background"
                className="object-cover rounded-3xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
                isZoomed
              />
            </CardHeader>
            <CardBody className="text-gray-600 w-full ">
              <div className="flex justify-around uppercase font-bold items-center">
                <p>Tipo: Hibernadero</p>
                <p className="text-white bg-green-900 rounded-md p-1">activo</p>
              </div>
              <div className="py-2 flex items-center self-center">
                <span><AiTwotoneEnvironment  className="text-red-500"/></span>
                <small className="font-sans">Norte de Santander / Pamplona</small>
              </div>
              <Accordion variant="splitted">
                <AccordionItem title="Detalles" indicator={
                  <CgDetailsMore/>
                }>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam, aliquid dicta eum est laboriosam tenetur. Harum fugiat neque non cupiditate vero pariatur, ratione minima eos assumenda iusto, rem animi.
                </AccordionItem>
              </Accordion>
            </CardBody>
            <CardFooter className="space-x-2 place-content-center flex">
              <Button color="warning" variant="bordered">Editar</Button>
              <Button color="danger" variant="bordered">Eliminar</Button>
              <Button color="success" variant="bordered">Sensores</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-medium text-center uppercase text-green-800 py-2">Hibernadero De Yuca</h4>
              <Image
                alt="Card background"
                className="object-cover rounded-3xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
                isZoomed
              />
            </CardHeader>
            <CardBody className="text-gray-600 w-full ">
              <div className="flex justify-around uppercase font-bold items-center">
                <p>Tipo: Hibernadero</p>
                <p className="text-white bg-red-700 rounded-md p-1">inactivo</p>
              </div>
              <div className="py-2 flex items-center self-center">
                <span><AiTwotoneEnvironment  className="text-red-500"/></span>
                <small className="font-sans">Norte de Santander / Pamplona</small>
              </div>
              <Accordion variant="splitted">
                <AccordionItem title="Detalles" indicator={
                  <CgDetailsMore/>
                }>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam, aliquid dicta eum est laboriosam tenetur. Harum fugiat neque non cupiditate vero pariatur, ratione minima eos assumenda iusto, rem animi.
                </AccordionItem>
              </Accordion>
            </CardBody>
            <CardFooter className="space-x-2">
              <Button color="warning" variant="bordered">Editar</Button>
              <Button color="danger" variant="bordered">Eliminar</Button>
              <Button color="success" variant="bordered">Sensores</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Hibernaderos;
