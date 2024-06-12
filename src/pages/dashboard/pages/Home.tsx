import { Accordion, AccordionItem } from "@nextui-org/react";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { buscarTodosLosHibernaderos } from "../../../services/hibernadero-controller";
import { useEffect, useState } from "react";
import { obtenerSensoresTodos } from "../../../services/sensor-controller";
import { buscarTodosLosUsuarios } from "../../../services/usuario-controller";
import { CardHibernaderos } from "../../../components/homeDashboard/CardHibernaderos";
import Hibernaderos from "./Invernaderos";
import { CardInformationAplicattion } from "../../../components/homeDashboard/CardInformationAplicattion";

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

interface Sensor {
  id: string;
  idHibernadero: string;
  nombre: string;
  descripcion: string;
  config: boolean;
}

interface Usuario {
  id: string;
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

const Home = () => {
  const [hibernaderos, setHibernaderos] = useState<Hibernadero[]>([]);
  const [sensor, setSensor] = useState<Sensor[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const token = sessionStorage.getItem("authToken");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          console.log(`Bearer ${token}`);
          const responseHibernaderos = await buscarTodosLosHibernaderos(token)
          const responseSensores = await obtenerSensoresTodos(token);
          const responseUsuarios = await buscarTodosLosUsuarios(token);
          
          setHibernaderos(responseHibernaderos.data);
          setSensor(responseSensores.data);
          setUsuarios(responseUsuarios.data);
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch hibernaderos:", error);
      }
    };
    fetchData();
  }, [token]);

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="text-lg">
      {/* Section 1 */}
      <HeaderDashboard mensaje={"Has vuelto"}/>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
        {/* Card 1 */}
        <CardHibernaderos numero={Hibernaderos.length}/>
        {/* Card 2 */}
        <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
          <CardInformationAplicattion usuarios={usuarios.length} sensores={sensor.length}/>
        </div>
        {/* Card 3 */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <h1 className="text-2xl font-bold mb-8">Ultimos hibernaderos</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            {hibernaderos.slice(0, 2).map((hibernadero) => (
              <div key={hibernadero.id} className="flex items-center gap-4 mb-4">
                <img
                  src={hibernadero.imagen}
                  alt={hibernadero.nombre}
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">{hibernadero.nombre}</h3>
                  <p className="text-gray-500">
                    {hibernadero.ciudad} - {hibernadero.departamento}
                  </p>
                </div>
              </div>
            ))}
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
            {/* Usuario Cards */}
            {usuarios.slice(0, 4).map((usuario) => (
              <div key={usuario.id} className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={`https://api.dicebear.com/5.x/thumbs/svg?seed=${usuario.usuario}`}
                    alt={`Avatar of ${usuario.nombres}`}
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">{usuario.nombres}</h3>
                    <p className="text-gray-500">{usuario.email}</p>
                  </div>
                </div>
                <div>
                  <span className="font-bold">2024-01-01</span>
                </div>
              </div>
            ))}
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
  