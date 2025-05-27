  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import {
    RiHome3Line,
    RiSeedlingLine,
    RiUser3Line,
    RiBarChartLine,
    RiSensorLine,
    RiMore2Fill,
    RiCloseFill,
  } from "react-icons/ri";
  import { ScrollShadow } from "@nextui-org/react";
  import { ProfileSidebar } from "./ProfileSidebar";
  import { GrConfigure } from "react-icons/gr";
  import { AiOutlineDeploymentUnit } from "react-icons/ai";
  import { FaUserCog } from "react-icons/fa";
  import { decodeToken } from "../../utils/utilsToken";

  const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    // Obtener y decodificar token
    const token = sessionStorage.getItem("authToken")!;
    const decodetoken = decodeToken(token);
    const isAdmin = decodetoken.sub === "ROOT";

    // Cerrar sesión
    const handleLogout = () => {
      sessionStorage.removeItem("userEmail");
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("imageBase64");
      sessionStorage.removeItem("tipoId");
      navigate("/");
    };

    return (
      <>
        {/* Contenedor principal del sidebar */}
        <div
          className={`bg-white h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          {/* Perfil del usuario */}
          <ProfileSidebar email={decodetoken.sub} />

          {/* Menú de navegación */}
          <div className="bg-primary p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
            <ScrollShadow hideScrollBar className="h-[500px]" offset={100}>
              <nav className="flex flex-col gap-8">
                {/* Links solo para ADMIN */}
                {isAdmin && (
                  <>
                    <Link
                      to="/dashboard/Home"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-all"
                    >
                      <RiHome3Line /> Inicio
                    </Link>
                    <Link
                      to="/dashboard/Estaciones-Sistema"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-all"
                    >
                      <RiBarChartLine /> Estaciones Sistema
                    </Link>
                    <Link
                      to="/dashboard/Usuarios"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-all"
                    >
                      <RiUser3Line /> Usuarios Sistema
                    </Link>
                    <Link
                      to="/dashboard/Propiedades"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-all"
                    >
                      <GrConfigure /> Propiedades del Sistema
                    </Link>
                  </>
                )}

                {/* Links comunes */}
                <Link
                  to="/dashboard/Mis-Estaciones"
                  onClick={() => setShowMenu(false)}
                  className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-all"
                >
                  <RiSeedlingLine /> Mis Estaciones
                </Link>
                <Link
                  to="/dashboard/Sensores"
                  onClick={() => setShowMenu(false)}
                  className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-all"
                >
                  <RiSensorLine /> Mis Sensores
                </Link>
                <Link
                  to="/dashboard/Asociacion-Estaciones"
                  onClick={() => setShowMenu(false)}
                  className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-all"
                >
                  <AiOutlineDeploymentUnit /> Asociaciones Estación
                </Link>
                <Link
                  to="/Dashboard/Ajustes-Perfil"
                  onClick={() => setShowMenu(false)}
                  className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-all"
                >
                  <FaUserCog /> Ajustes Perfil
                </Link>
                <Link
            to="/dashboard/Tuya"
            className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-primary-900/50 transition-all"
            onClick={() => setShowMenu(false)}
          >
            <RiBarChartLine /> Panel Tuya
          </Link>
              </nav>
            </ScrollShadow>

            {/* Botón cerrar sesión */}
            <div
              onClick={handleLogout}
              className="bg-primary-900/50 text-white p-4 rounded-xl hover:bg-primary-800 transition-all text-center cursor-pointer"
            >
              <button>Cerrar sesión</button>
            </div>
          </div>
        </div>

        {/* Botón flotante para mostrar/ocultar menú en móviles */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50 transition-all hover:bg-primary-800"
        >
          {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
        </button>
      </>
    );
  };

  export default Sidebar;
