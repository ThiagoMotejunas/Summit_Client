import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const ProtectedRoute: React.FC = () => {
    const { user } = useAuth();

    return !user ? 
        <Navigate to={"/login"} replace /> : 
        <Outlet />;
};

export default ProtectedRoute;
