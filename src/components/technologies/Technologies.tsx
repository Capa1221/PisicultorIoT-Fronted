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
    <div className="flex flex-col m-12">
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
                  <p className="text-small text-default-500">vitejs.dev/</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                Usamos React con Vite porque combina la flexibilidad y eficiencia de React para crear interfaces de usuario dinámicas con la rapidez y simplicidad de Vite para un desarrollo rápido y una excelente experiencia de usuario. Esto permite construir aplicaciones web modernas y optimizadas sin complicaciones, independientemente de tu experiencia en desarrollo.
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
                  <p className="text-small text-default-500">spring.io</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                Utilizamos Spring Boot como backend porque proporciona una plataforma robusta y escalable para desarrollar aplicaciones Java con facilidad. Con su configuración mínima y su extensa colección de herramientas integradas, Spring Boot permite crear servicios backend potentes y seguros, simplificando el desarrollo y acelerando la entrega de aplicaciones empresariales modernas.
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
          title="LibrerÃ­as"
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
