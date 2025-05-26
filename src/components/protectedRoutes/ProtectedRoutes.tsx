import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { decodeToken } from '../../utils/utilsToken';
import { ProtectedRoutesProps } from '../../services/interfaces';

export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children, redirectTo = "/" }) => {
    const token = sessionStorage.getItem("authToken");

    if (!token) {
        return <Navigate to={redirectTo} />;
    }

    const decodedToken = decodeToken(token);

    if (decodedToken !== null) {
        return children ? <>{children}</> : <Outlet />;
    }

    return <Navigate to={redirectTo} />;
};
