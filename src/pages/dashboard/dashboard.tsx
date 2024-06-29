import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Home from './pages/Home';
import { EstacionesUser } from './pages/EstacionesUser';
import { EstacionesAsociacion } from './pages/EstacionesAsociacion';
import { Usuarios } from './pages/usuarios';
import { Sensores } from './pages/Sensores';
import { EstacionesSistemaComponent } from './pages/EstacionesSistema';
import { Propiedades } from './pages/Propiedades';
import { PageGraficasSensores } from './pages/PageSensoresUsuarioHibernadero';
import { decodeToken } from '../../utils/utilsToken';
import { buscarTodosLosUsuarios } from '../../services';
import adminRoutes from '../../routes/AdminRoutes.json';
import userRoutes from '../../routes/UserRoutes.json';

export const Dashboard = () => {
  const token = sessionStorage.getItem('authToken')!;
  const navigate = useNavigate();
  const decodedToken = decodeToken(token);

  useEffect(() => {
    const fetchValidarToken = async () => {
      try {
        const response = await buscarTodosLosUsuarios(token);
        if (response.status !== 200) {
          navigate('/');
          sessionStorage.removeItem('authToken');
          alert('Su Token ha expirado');
        }
      } catch (error) {
        console.error('error', error);
        navigate('/');
        sessionStorage.removeItem('authToken');
      }
    };
    fetchValidarToken();
  }, [token, navigate]);

  const isAdmin = decodedToken && decodedToken.sub === 'root';
  const defaultPath = isAdmin ? '/dashboard/Home' : '/dashboard/Mis-Estaciones';

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Routes>
          {/* Cambiamos la ruta "/" dependiendo de isAdmin */}
          <Route path="/" element={<Home />} />
          {/* Ruta por defecto según el rol */}
          <Route path={defaultPath} element={isAdmin ? <Home /> : <EstacionesUser />} />

          {/* Resto de las rutas */}
          {isAdmin ? (
            adminRoutes.map((route, index) => (
              <Route key={index} path={`/dashboard${route.path}`} element={<ComponentByName name={route.component} />} />
            ))
          ) : (
            userRoutes.map((route, index) => (
              <Route key={index} path={`/dashboard${route.path}`} element={<ComponentByName name={route.component} />} />
            ))
          )}

          {/* Ruta de gráfica de sensores */}
          <Route path="/dashboard/Sensor/Grafica" element={<PageGraficasSensores />} />
        </Routes>
      </main>
    </div>
  );
};

// Componente que carga dinámicamente los componentes según el nombre
const ComponentByName = ({ name }: { name: string }) => {
  switch (name) {
    case 'EstacionesUser':
      return <EstacionesUser />;
    case 'EstacionesAsociacion':
      return <EstacionesAsociacion />;
    case 'Usuarios':
      return <Usuarios />;
    case 'Sensores':
      return <Sensores />;
    case 'EstacionesSistemaComponent':
      return <EstacionesSistemaComponent />;
    case 'Propiedades':
      return <Propiedades />;
    case 'PageGraficasSensores':
      return <PageGraficasSensores />;
    default:
      return null;
  }
};

export default Dashboard;
