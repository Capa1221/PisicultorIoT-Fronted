import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { RiLineChartLine } from "react-icons/ri";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";

const Home = () => {

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      {/* Section 1 */}
      <HeaderDashboard />
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
        {/* Card 1 */}
        <div className="bg-primary/90 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
          <RiLineChartLine className="text-5xl" />
          <h4 className="text-xl">Total Hibernaderos</h4>
          <span className="text-5xl text-white">+ 0</span>
          <Button color="secondary" variant="bordered">
            Ver mas
          </Button>
        </div>
        {/* Card 2 */}
        <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
          <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
            <span className="bg-primary-500 text-gray-300 text-2xl font-bold p-4 rounded-xl">
              98
            </span>
            <div>
              <h3 className="font-bold">Sensores</h3>
              <p className="text-gray-500">en el sistema</p>
            </div>
          </div>
          <div className="bg-primary-100/10 rounded-xl p-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary-500 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                32
              </span>
              <div>
                <h3 className="font-bold">Usuarios</h3>
                <p className="text-gray-500">en el sistema</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <h1 className="text-2xl font-bold mb-8">Tus Hibernaderos</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://www.agrosavia.co/media/0n0g5qrg/sol-mara-regino-herna-ndez.jpg"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h3 className="font-bold">Hibernadero de Papa</h3>
                <p className="text-gray-500">Pamplona - Norte de Santander</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/618/940/large_2x/rows-of-young-bushes-potato-plantation-farming-and-agriculture-agroindustry-agribusiness-growing-food-vegetables-growing-potatoes-in-plastic-wrap-tunnels-in-early-spring-greenhouse-effect-photo.jpg"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h3 className="font-bold">Hibernadero de yuca</h3>
                <p className="text-gray-500">Cacota - Norte de Santander</p>
              </div>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="hover:text-primary-100 transition-colors hover:underline"
              >
                Ver todos
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-8">Formularios Recientes</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            {/* Card 1 */}
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src="https://img.freepik.com/foto-gratis/hombre-joven-hermoso-contento-camiseta-azul-que-senala-lado_1262-17845.jpg"
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-bold">Alexander Williams</h3>
                  <p className="text-gray-500">JQ Holdings</p>
                </div>
              </div>
              <div>
                <span className="font-bold">2024-01-01</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src="https://img.freepik.com/foto-gratis/alegre-joven-deportista-posando-mostrando-pulgares-arriba-gesto_171337-8194.jpg"
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-bold">Jhon Philips</h3>
                  <p className="text-gray-500">Inchor Techs</p>
                </div>
              </div>
              <div>
                <span className="font-bold">2024-01-01</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-8">Documentación</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Accordion>
                  <AccordionItem
                    key="1"
                    aria-label="Documentacion Sistema"
                    subtitle={
                        <span>
                          Pressione para mirar la <strong>Documentacion Sistema</strong>
                        </span>
                      }
                    title="Documentacion Sistema"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Documentacion Backend"
                    subtitle={
                      <span>
                        Pressione para mirar la <strong>Documentacion Backend</strong>
                      </span>
                    }
                    title="Documentacion Backend"
                  >
                    {defaultContent}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
