import { Route } from 'react-router-dom';
import EstacionesUser from '../pages/dashboard/views/EstacionesUser';
import EstacionesAsociacion from '../pages/dashboard/views/EstacionesAsociacion';
import Sensores from '../pages/dashboard/views/Sensores';
import GraficasAnalisis from '../pages/dashboard/views/GraficasAnalisis';
import { AjustePerfil } from '../pages/dashboard/views/AjustePerfil';

const UserRoutes = (
    <>
        <Route path="/Mis-Estaciones" element={<EstacionesUser />} />
        <Route path="/Asociacion-Estaciones" element={<EstacionesAsociacion />} />
        <Route path="/Sensores" element={<Sensores />} />
        <Route path="/Sensor/Grafica/:id" element={<GraficasAnalisis />} />
        <Route path='/Ajustes-Perfil' element={<AjustePerfil/>}/>
    </>
);

export default UserRoutes