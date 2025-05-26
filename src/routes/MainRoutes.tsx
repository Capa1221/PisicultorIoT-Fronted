import { Routes } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';
import { decodeToken } from '../utils/utilsToken';

const getUserRole = () => {
  const token = sessionStorage.getItem("authToken");
  if (!token) return 'user'; // Por seguridad

  const decodetoken = decodeToken(token);
  return decodetoken.sub === "ROOT" ? 'admin' : 'user';
};

function MainRoutes() {
  const role = getUserRole();

  return (
    <Routes>
      {role === 'admin' ? AdminRoutes : UserRoutes}
    </Routes>
  );
}

export default MainRoutes;
