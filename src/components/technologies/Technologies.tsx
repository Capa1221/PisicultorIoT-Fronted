import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Tab,
  Tabs,
  Image,
} from "@nextui-org/react";
import imageVite from '../../assets/react.svg';


export const Technologies = () => {
  return (
    <div className="flex flex-col m-12" id="Technologies">
      <Tabs aria-label="Options" className="place-content-center">
        <Tab
          key="frameworks"
          title="Frameworks"
          className="place-content-center flex"
        >
          <div className="flex flex-col md:flex-row">
            <Card className="max-w-[400px] m-2">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src={imageVite}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">React + Vite</p>
                  <p className="text-small text-default-500">Front-end</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                Usamos React con Vite porque combina la eficiencia y la flexibilidad de React para crear interfaces de usuario dinamicas con la rapidez y la simplicidad de Vite para un desarrollo rapido y una excelente experiencia de usuario. Independientemente de la experiencia en desarrollo, esto permite crear aplicaciones web modernas y optimizadas sin problemas.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://vitejs.dev"
                >
                  Visita su pagina Principal.
                </Link>
              </CardFooter>
            </Card>
            <Card className="max-w-[400px] m-2">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Spring Boot</p>
                  <p className="text-small text-default-500">Back-end</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                Utilizamos Spring Boot como backend porque ofrece una plataforma sólida y escalable que facilita el desarrollo de aplicaciones Java. Spring Boot facilita la creación de servicios backend poderosos y seguros, simplifica el desarrollo y acelera la entrega de aplicaciones empresariales modernas gracias a su configuración mínima y su amplia gama de herramientas integradas.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://spring.io"
                >
                  Visita su pagina Principal.
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Tab>
        <Tab
          key="libraries"
          title="Librerías"
          className="place-content-center flex"
        >
          <div className="flex flex-col md:flex-row">
            <Card className="max-w-[400px] m-2">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">NextUI</p>
                  <p className="text-small text-default-500">nextui.org</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                Independientemente de su experiencia en diseño, con esta libreria podemos utilizar componentes para sitios web .
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                >
                  Visite el código fuente en GitHub.
                </Link>
              </CardFooter>
            </Card>
            <Card className="max-w-[400px] m-2">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">NextUI</p>
                  <p className="text-small text-default-500">nextui.org</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  Make beautiful websites regardless of your design experience.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
