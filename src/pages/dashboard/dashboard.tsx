import { useEffect } from 'react';
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

interface RouteDefinition {
  path: string;
  component: string;
}

interface SidebarRoute extends RouteDefinition {
  icon: string;
  description: string;
}

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

  const isAdmin = decodedToken.sub == 'ROOT';
  const routes = isAdmin ? adminRoutes : userRoutes;

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar routes={routes} />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Routes>
          {/* Rutas definidas seg�n el rol */}
          <Route path="/" element={<Home />} />
          {routes.map((route: SidebarRoute, index: number) => (
            <Route
              key={index}
              path={`/dashboard${route.path}`}
              element={<ComponentByName name={route.component} />}
            />
          ))}
          {/* Ruta de gr�fica de sensores */}
          <Route path="/dashboard/Sensor/Grafica" element={<PageGraficasSensores />} />
        </Routes>
      </main>
    </div>
  );
};

// Componente que carga din�micamente los componentes seg�n el nombre
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
