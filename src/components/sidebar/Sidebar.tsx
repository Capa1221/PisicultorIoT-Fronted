import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RiHome3Line,    // Inicio
  RiSeedlingLine, // Hibernadero
  RiUser3Line,    // Usuarios
  RiBarChartLine, // Usuario - Hibernadero
  RiSensorLine,   // Sensores
  RiMore2Fill,    // Icono de menú desplegable
  RiCloseFill     // Icono de cerrar
} from "react-icons/ri";
import imageUser from '../../assets/RegisterAgricultor.jpeg';
import { ScrollShadow } from "@nextui-org/react";

const Sidebar = ({ userEmail }: { userEmail: string }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <>
      <div
        className={`bg-secondary-900/10 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"
          }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src={imageUser}
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
            alt="Profile"
          />
          <h1 className="text-xl text-black font-bold">{userEmail}</h1>
          <p className="bg-primary-100 py-2 px-4 rounded-full text-black">
            {userEmail == 'ROOT' ? 'Administrador' : 'Usuario'}
          </p>
        </div>
        {/* Nav */}
        <div className="bg-primary p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
          <ScrollShadow hideScrollBar className="h-[400px]">
            <nav className="flex flex-col gap-8">
              <Link
                to="/dashboard/home"
                className="flex items-center gap-4 text-white py-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <RiHome3Line /> Inicio
              </Link>
              <Link
                to="/dashboard/hibernaderos"
                className="flex items-center gap-4 text-white py-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <RiSeedlingLine /> Hibernadero
              </Link>
              <Link
                to="/dashboard/usuarios"
                className="flex items-center gap-4 text-white py-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <RiUser3Line /> Usuarios
              </Link>
              <Link
                to="/dashboard/usuario-hibernadero"
                className="flex items-center gap-4 text-white py-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <RiBarChartLine /> Usuario - <br />Hibernadero
              </Link>
              <Link
                to="/dashboard/Sensores"
                className="flex items-center gap-4 text-white py-2 rounded-xl hover:bg-primary-900/50 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <RiSensorLine /> Sensores
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
