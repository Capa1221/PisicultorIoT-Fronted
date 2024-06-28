import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  RiHome3Line, RiSeedlingLine, RiUser3Line, RiBarChartLine, RiSensorLine, RiMore2Fill, RiCloseFill} from "react-icons/ri";
import { ScrollShadow } from "@nextui-org/react";
import { ProfileSidebar } from "./ProfileSidebar";
import { GrConfigure } from "react-icons/gr";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { decodeToken } from "../../utils/utilsToken";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("authToken")!;
  const decodetoken = decodeToken(token);

  const handleLogout = () => {
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('imageBase64');
    sessionStorage.removeItem('tipoId');
    navigate('/');
  };

  return (
    <>
      <div
        className={`bg-white h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"
          }`}
      >
        {/* Profile */}
        <ProfileSidebar email={decodetoken.sub}/>
        {/* Nav */}
        <div className="bg-primary p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
          <ScrollShadow hideScrollBar className="h-[500px]">
            <nav className="flex flex-col gap-8">
              <Link
                to="/dashboard/Home"
                className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <RiHome3Line /> Inicio
              </Link>
              <Link
                to="/dashboard/Mis-Estaciones"
                className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <RiSeedlingLine /> Mis Estaciones
              </Link>
              <Link
                to="/dashboard/Sensores"
                className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <RiSensorLine /> Mis Sensores
              </Link>
              <Link
                to="/dashboard/Asociacion-Estaciones"
                className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <AiOutlineDeploymentUnit  /> Asociaciones Estacion
              </Link>
              <Link
                to="/dashboard/Estaciones-Sistema"
                className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <RiBarChartLine /> Estaciones Sistema
              </Link>
              <Link
                to="/dashboard/Usuarios"
                className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <RiUser3Line /> Usuarios Sistema
              </Link>
              <Link
                to="/dashboard/Propiedades"
                className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <GrConfigure /> Propiedades del Sistema
              </Link>
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

export default Sidebar;
