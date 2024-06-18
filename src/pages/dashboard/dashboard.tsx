import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Hibernaderos from "./pages/Invernaderos";
import Home from "./pages/Home";
import Sensores from "./pages/Sensores";
import { Usuarios } from "./pages/usuarios";
import { Propiedades } from "./pages/Propiedades";
import { PageGraficasSensores } from "../../components/usuarioHibernadero/PageSensoresUsuarioHibernadero";
import HibernaderosSistemaComponent from "./pages/HibernaderosSistema";

export const Dashboard = () => {
  
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      navigate('/');
    } else {
      // Obtener el correo electrónico del usuario guardado en la sesión
      const email = sessionStorage.getItem('userEmail');
      if (email) {
        setUserEmail(email);
      }
    }
  }, [navigate]);

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar userEmail={userEmail} />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hibernaderos" element={<Hibernaderos />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/Sensores" element={<Sensores />} />
          <Route path="/hibernaderos-sistema" element={<HibernaderosSistemaComponent/>}/>
          <Route path="/propiedades" element={<Propiedades/>}/>
          <Route path="/Sensor/Grafica" element={<PageGraficasSensores/>}/>
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
