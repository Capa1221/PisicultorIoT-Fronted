import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EstacionInterface, SensorInterface, UserInterface } from "../../../services/interfaces";
import { buscarTodosLosUsuarios, obtenerSensoresTodos } from "../../../services";
import { CardHibernaderos, CardInformationAplicattion, HeaderDashboard } from "../../../components";
import defaultImg from '../../../assets/default_img_inv.jpg';
import { buscarTodaslasEstaciones } from "../../../services/Estaciones";

const Home = () => {
  const [Estaciones, setEstaciones] = useState<EstacionInterface[]>([]);
  const [sensor, setSensor] = useState<SensorInterface[]>([]);
  const [usuarios, setUsuarios] = useState<UserInterface[]>([]);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const responseEstaciones = await buscarTodaslasEstaciones(token);
          const responseSensores = await obtenerSensoresTodos(token);
          const responseUsuarios = await buscarTodosLosUsuarios(token);

          setEstaciones(responseEstaciones.data);
          setSensor(responseSensores.data);
          setUsuarios(responseUsuarios.data);
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch Estaciones:", error);
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
        <CardHibernaderos numero={Estaciones.length} />
        {/* Card 2 */}
        <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
          <CardInformationAplicattion numerousuario={usuarios.length} numerosensor={sensor.length} numeroinvernaderos={Estaciones.length} />
        </div>
        {/* Card 3 */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <h1 className="text-2xl font-bold mb-8">Últimas Estaciones</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            {Array.isArray(Estaciones) && Estaciones.slice(0, 3).map((hibernadero) => (
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
              <Link to="/dashboard/Estaciones-sistema" className="text-small text-gray-600 font-semibold">
                Ver todos
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-8">Últimos usuarios registrados</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
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
      </section>
    </div>
  );
};

export default Home;
