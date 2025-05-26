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
    <div className="flex flex-col m-12" id="tecnologias">
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
                Optamos por React junto con Vite por su combinación perfecta de la adaptabilidad y la creatividad de React a la hora de crear interfaces de usuario interactivas, junto con la rapidez y sencillez de Vite para un desarrollo rápido y una experiencia de usuario de primer nivel. Independientemente de la experiencia de cada uno en desarrollo, este dúo permite la creación perfecta de aplicaciones web avanzadas y ajustadas sin ningún tipo de problema.
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
                Spring Boot es nuestra plataforma de backend elegida debido a su naturaleza robusta y ampliable, lo que permite la construcción perfecta de aplicaciones Java. A través de Spring Boot, creamos sin esfuerzo soluciones de backend sólidas y protegidas, agilizando los procesos de desarrollo y acelerando el despliegue de aplicaciones empresariales de vanguardia con su configuración optimizada y su completo conjunto de herramientas.
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
                No importa su nivel de experiencia en diseño, esta biblioteca nos permite incorporar componentes en el diseño web.
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
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
