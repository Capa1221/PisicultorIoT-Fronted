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
import imageVite from "../../assets/react.svg";

export const Technologies = () => {
  return (
    <section
      id="tecnologias"
      className="flex flex-col m-12 max-w-7xl mx-auto"
      aria-label="Tecnologías usadas en el proyecto"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-14">
        Tecnologías Utilizadas
      </h2>

      <Tabs
        aria-label="Selección de tecnologías"
        className="place-content-center"
        variant="pills"
      >
        <Tab
          key="frameworks"
          title="Frameworks"
          className="place-content-center flex"
          aria-controls="frameworks-panel"
          id="frameworks-tab"
        >
          <div
            id="frameworks-panel"
            aria-labelledby="frameworks-tab"
            className="flex flex-col md:flex-row gap-6 overflow-x-auto px-2"
          >
            <Card className="max-w-md flex-shrink-0 shadow-lg rounded-xl">
              <CardHeader className="flex gap-4 items-center p-4">
                <Image
                  alt="React + Vite Logo"
                  height={48}
                  width={48}
                  radius="md"
                  src={imageVite}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    React + Vite
                  </h3>
                  <p className="text-sm text-gray-500">Front-end</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className="p-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  React combinado con Vite nos ofrece una experiencia de
                  desarrollo ágil y moderna. React aporta flexibilidad para
                  crear interfaces interactivas, mientras que Vite asegura un
                  entorno rápido y optimizado para construir aplicaciones web
                  escalables y de alto rendimiento.
                </p>
              </CardBody>
              <Divider />
              <CardFooter className="p-4">
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://vitejs.dev"
                  aria-label="Visitar página oficial de Vite"
                  className="text-cyan-600 hover:text-cyan-800 font-semibold transition-colors"
                >
                  Visita su página oficial
                </Link>
              </CardFooter>
            </Card>

            <Card className="max-w-md flex-shrink-0 shadow-lg rounded-xl">
              <CardHeader className="flex gap-4 items-center p-4">
                <Image
                  alt="Spring Boot Logo"
                  height={48}
                  width={48}
                  radius="md"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  className="object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Spring Boot
                  </h3>
                  <p className="text-sm text-gray-500">Back-end</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className="p-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  Spring Boot es un framework robusto y escalable que facilita
                  la creación de aplicaciones backend seguras y mantenibles en
                  Java. Su configuración simplificada y ecosistema completo
                  aceleran el desarrollo de soluciones empresariales modernas.
                </p>
              </CardBody>
              <Divider />
              <CardFooter className="p-4">
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://spring.io"
                  aria-label="Visitar página oficial de Spring Boot"
                  className="text-cyan-600 hover:text-cyan-800 font-semibold transition-colors"
                >
                  Visita su página oficial
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Tab>

        <Tab
          key="libraries"
          title="Librerías"
          className="place-content-center flex"
          aria-controls="libraries-panel"
          id="libraries-tab"
        >
          <div
            id="libraries-panel"
            aria-labelledby="libraries-tab"
            className="flex flex-col md:flex-row gap-6 overflow-x-auto px-2"
          >
            <Card className="max-w-md flex-shrink-0 shadow-lg rounded-xl">
              <CardHeader className="flex gap-4 items-center p-4">
                <Image
                  alt="NextUI Logo"
                  height={48}
                  width={48}
                  radius="md"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  className="object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">NextUI</h3>
                  <p className="text-sm text-gray-500">nextui.org</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className="p-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  NextUI nos provee componentes UI accesibles y elegantes que
                  facilitan el diseño de interfaces modernas, asegurando una
                  experiencia consistente sin importar el nivel de experiencia
                  en diseño.
                </p>
              </CardBody>
              <Divider />
              <CardFooter className="p-4">
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                  aria-label="Visitar repositorio de NextUI en GitHub"
                  className="text-cyan-600 hover:text-cyan-800 font-semibold transition-colors"
                >
                  Ver código fuente en GitHub
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Tab>
      </Tabs>
    </section>
  );
};
