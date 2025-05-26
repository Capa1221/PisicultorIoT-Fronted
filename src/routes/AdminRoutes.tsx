import { Route } from 'react-router-dom';
import Home from '../pages/dashboard/views/Home';
import EstacionesUser from '../pages/dashboard/views/EstacionesUser';
import EstacionesAsociacion from '../pages/dashboard/views/EstacionesAsociacion';
import Usuarios from '../pages/dashboard/views/usuarios';
import Sensores from '../pages/dashboard/views/Sensores';
import EstacionesSistemaComponent from '../pages/dashboard/views/EstacionesSistema';
import Propiedades from '../pages/dashboard/views/Propiedades';
import GraficasAnalisis from '../pages/dashboard/views/GraficasAnalisis';
import { AjustePerfil } from '../pages/dashboard/views/AjustePerfil';
import Tuya from '../pages/dashboard/views/TuyaSensorPage'; // ✅ Agrega esta línea

const AdminRoutes = (
    <>
        <Route path="/Home" element={<Home />} />
        <Route path="/Mis-Estaciones" element={<EstacionesUser />} />
        <Route path="/Asociacion-Estaciones" element={<EstacionesAsociacion />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/Sensores" element={<Sensores />} />
        <Route path="/Estaciones-Sistema" element={<EstacionesSistemaComponent />} />
        <Route path="/propiedades" element={<Propiedades />} />
        <Route path="/Sensor/Grafica/:id" element={<GraficasAnalisis />} />
        <Route path="/Ajustes-Perfil" element={<AjustePerfil />} />
        <Route path="/Tuya" element={<Tuya />} /> {/* ✅ Agrega esta ruta */}
    </>
);

export default AdminRoutes;
