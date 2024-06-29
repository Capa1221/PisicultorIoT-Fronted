import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { buscarTodosLosUsuarios } from "../../services";
import { Home,PageGraficasSensores,Sensores,Propiedades,Usuarios,EstacionesUser,EstacionesSistemaComponent,EstacionesAsociacion,ForgotPassword,} from '../index'
import adminRoutes from "../../routes/AdminRoutes.json";
import userRoutes from "../../routes/UserRoutes.json";
import { decodeToken } from "../../utils/utilsToken";
import React from "react";

// Definir tipos para las rutas
type RouteItem = {
  path: string;
  component: string;
  icon: string;
  description: string;
};

export const Dashboard = () => {
  const token = sessionStorage.getItem("authToken") || "";
  const navigate = useNavigate();
  const [userRoutesList, setUserRoutesList] = useState<RouteItem[]>([]); // Especificar el tipo de datos aquí

  useEffect(() => {
    const fetchValidarToken = async () => {
      try {
        const response = await buscarTodosLosUsuarios(token);
        if (response.status !== 200) {
          navigate("/");
          sessionStorage.removeItem("authToken");
          alert("Su Token ha expirado");
        } else {
          // Determinar qué rutas cargar según el rol del usuario
          const decodificarToken = decodeToken(token);
          const isAdmin = decodificarToken.sub=="ROOT";

          if (isAdmin) {
            setUserRoutesList(adminRoutes as RouteItem[]); // Castear a RouteItem[]
          } else {
            setUserRoutesList(userRoutes as RouteItem[]); // Castear a RouteItem[]
          }
        }
      } catch (error) {
        console.error("Error al validar token:", error);
        navigate("/");
        sessionStorage.removeItem("authToken");
      }
    };
    fetchValidarToken();
  }, [token, navigate]);

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar routes={userRoutesList} /> {/* Pasar las rutas al componente Sidebar */}
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Routes>
          {/* Iterar sobre las rutas dinámicamente */}
          {userRoutesList.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={React.createElement(eval(route.component))}
            />
          ))}
          {/* Ruta para el Home */}
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
