import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem, User } from "@nextui-org/react";
import { EstacionInterface, SensorInterface, UserInterface } from "../../../services/interfaces";
import { buscarTodosLosUsuarios, obtenerSensoresTodos } from "../../../services";
import { CardHibernaderos, CardInformationAplicattion, HeaderDashboard } from "../../../components";
import defaultImg from '../../../assets/default_img_inv.jpg';
import { buscarTodaslasEstaciones } from "../../../services/Estaciones";

export const Home = () => {

  const [hibernaderos, setHibernaderos] = useState<EstacionInterface[]>([]);
  const [sensor, setSensor] = useState<SensorInterface[]>([]);
  const [usuarios, setUsuarios] = useState<UserInterface[]>([]);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          console.log(`Bearer ${token}`);
          const responseHibernaderos = await buscarTodaslasEstaciones(token)
          //const responseSensores = await obtenerSensoresTodos(token);
          const responseUsuarios = await buscarTodosLosUsuarios(token);

          setHibernaderos(responseHibernaderos.data);
          //setSensor(responseSensores.data);
          setUsuarios(responseUsuarios.data);
          console.log(responseHibernaderos.data.length);
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch hibernaderos:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="text-lg">
      {/* Section 1 */}
      <HeaderDashboard mensaje={"Has vuelto"} />
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
        {/* Card 1 */}
        <CardHibernaderos numero={hibernaderos.length} />
        {/* Card 2 */}
        <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
          <CardInformationAplicattion numerousuario={usuarios.length} numerosensor={sensor.length} numeroinvernaderos={hibernaderos.length} />
        </div>
        {/* Card 3 */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <h1 className="text-2xl font-bold mb-8">�ltimos hibernaderos</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            {Array.isArray(hibernaderos) && hibernaderos.slice(0, 3).map((hibernadero) => (
              <div key={hibernadero.id} className="flex items-center gap-4 mb-4">
                <img
                  src={(hibernadero.imagen === null || hibernadero.imagen === "") ? defaultImg : hibernadero.imagen}
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
              <Link to="/dashboard/hibernaderos-sistema" className="text-small text-gray-600 font-semibold">
                Ver todos
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-8">�ltimos usuarios registrados</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            {/* Usuario Cards */}
            {usuarios.slice(0, 3).map((usuario) => (
              <div key={usuario.id} className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={`https://api.dicebear.com/5.x/thumbs/svg?seed=${usuario.usuario}`}
                    alt={`Avatar of ${usuario.nombres}`}
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">{usuario.nombres}</h3>
                  </div>
                </div>
                <div>
                  <small className="text-gray-600 font-semibold">{usuario.email}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-8">Documentaci�n</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full">
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
                    <User
                      name={(
                        <Link to={""} className="text-primary font-semibold">
                          SistemaDocumentation.pdf
                        </Link>
                      )}
                      description="Este manual tiene como objetivo ayudar a los usuarios a navegar y comprender las diversas funciones que ofrece el sistema."
                      avatarProps={{
                        src: "https://cdn0.iconfinder.com/data/icons/upload-download-files/128/file_pdf_document-512.png"
                      }}
                    />
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
                    <User
                      name={(
                        <Link to={""} className="text-primary font-semibold">
                          BackendDocumentation.pdf
                        </Link>
                      )}
                      description="Este manual está diseñado para guiar a los usuarios en la exploración y comprensión de las distintas funcionalidades que proporciona la API."
                      avatarProps={{
                        src: "https://cdn0.iconfinder.com/data/icons/upload-download-files/128/file_pdf_document-512.png"
                      }}
                    />
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
