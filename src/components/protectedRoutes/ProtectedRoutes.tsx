import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { decodeToken } from '../../utils/utilsToken';
import { ProtectedRoutesProps } from '../../services/interfaces';

export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({
  children,
  redirectTo = '/Iniciar-Sesion', // Redirección correcta al login
}) => {
  const token = sessionStorage.getItem('authToken');

  if (!token) {
    return <Navigate to={redirectTo} replace />;
  }

  const decodedToken = decodeToken(token);

  if (!decodedToken || isTokenExpired(decodedToken)) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

const isTokenExpired = (decodedToken: any): boolean => {
  if (!decodedToken?.exp) return true;
  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken.exp < currentTime;
};

