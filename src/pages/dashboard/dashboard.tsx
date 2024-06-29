import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { EstacionesUser } from "./pages/EstacionesUser";
import Home from "./pages/Home";
import { Usuarios } from "./pages/usuarios";
import { Propiedades } from "./pages/Propiedades";
import { PageGraficasSensores } from "./pages/PageSensoresUsuarioHibernadero";
import { EstacionesAsociacion } from "./pages/EstacionesAsociacion";
import { Sensores } from "./pages/Sensores";
import { EstacionesSistemaComponent } from "./pages/EstacionesSistema";
import { buscarTodosLosUsuarios } from "../../services";

export const Dashboard = () => {
  const token = sessionStorage.getItem("authToken")!;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchValidarToken = async () => {
      try {
        const response = await buscarTodosLosUsuarios(token);
        if (response.status !== 200) {
          navigate("/");
          sessionStorage.removeItem("authToken");
          alert("Su Token ha expirado");
        }
      } catch (error) {
        console.error("error", error);
        navigate("/");
        sessionStorage.removeItem("authToken");
      }
    };
    fetchValidarToken();
  }, [token, navigate]);

  const isAdmin = sessionStorage.getItem("isAdmin") === "true";

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Mis-Estaciones" element={isAdmin ? <EstacionesUser /> : <Navigate to="/" replace />} />
          <Route path="/Asociacion-Estaciones" element={isAdmin ? <EstacionesAsociacion /> : <Navigate to="/" replace />} />
          <Route path="/Usuarios" element={isAdmin ? <Usuarios /> : <Navigate to="/" replace />} />
          <Route path="/Sensores" element={isAdmin ? <Sensores /> : <Navigate to="/" replace />} />
          <Route path="/Estaciones-Sistema" element={isAdmin ? <EstacionesSistemaComponent /> : <Navigate to="/" replace />} />
          <Route path="/propiedades" element={isAdmin ? <Propiedades /> : <Navigate to="/" replace />} />
          <Route path="/Sensor/Grafica" element={<PageGraficasSensores />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
