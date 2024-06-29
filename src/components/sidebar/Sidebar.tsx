import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiHome3Line, RiSeedlingLine, RiUser3Line, RiBarChartLine, RiSensorLine, RiMore2Fill, RiCloseFill } from "react-icons/ri";
import { ScrollShadow } from "@nextui-org/react";
import { decodeToken } from "../../utils/utilsToken";
import adminRoutes from "../../routes/AdminRoutes.json";
import userRoutes from "../../routes/UserRoutes.json";
import { ProfileSidebar } from "./ProfileSidebar";

interface SidebarProps {
  routes: SidebarRoute[];
}

interface RouteDefinition {
  path: string;
  component: string;
}

interface SidebarRoute extends RouteDefinition {
  icon: string;
  description: string;
}

const Sidebar = ({ routes }: SidebarProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("authToken")!;
  const decodedToken = decodeToken(token);

  const handleLogout = () => {
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('imageBase64');
    sessionStorage.removeItem('tipoId');
    navigate('/');
  };

  const isAdmin = decodedToken.sub == 'ROOT';

  return (
    <>
      <div
        className={`bg-white h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"}`}
      >
        {/* Profile */}
        <ProfileSidebar email={decodedToken.sub} />

        {/* Nav */}
        <div className="bg-primary p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
          <ScrollShadow hideScrollBar className="h-[500px]">
            <nav className="flex flex-col gap-8">
              {routes.map((route, index) => (
                // Filtramos las rutas según el rol del usuario
                // Si es admin, mostramos solo las rutas de adminRoutes
                // Si no es admin, mostramos solo las rutas de userRoutes
                (isAdmin ? adminRoutes : userRoutes).some(r => r.path === route.path) &&
                <Link
                  key={index}
                  to={`/dashboard${route.path}`}
                  className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                  onClick={() => setShowMenu(false)}
                >
                  {/* Renderizamos el icono y la descripción desde el JSON */}
                  {renderIcon(route.icon)}
                  {route.description}
                </Link>
              ))}
            </nav>
          </ScrollShadow>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl hover:bg-white hover:text-green-900 text-center" onClick={handleLogout}>
            <button>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

// Función para renderizar iconos basados en nombres de iconos de React Icons
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "RiHome3Line":
      return <RiHome3Line />;
    case "RiSeedlingLine":
      return <RiSeedlingLine />;
    case "RiUser3Line":
      return <RiUser3Line />;
    case "RiBarChartLine":
      return <RiBarChartLine />;
    case "RiSensorLine":
      return <RiSensorLine />;
    default:
      return null;
  }
};

export default Sidebar;
