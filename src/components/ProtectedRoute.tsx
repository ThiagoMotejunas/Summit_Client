import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import DefaultPage from './DefaultPage';

const ProtectedRoute: React.FC = () => {
    const { user } = useAuth();
    const location = useLocation();

    return !user ? (
        <DefaultPage center>
            <div className='max-w-lg'>
                <h1 className='text-3xl font-bold text-center mt-20'>
                    Você precisa estar logado para acessar esta página.
                </h1>
                <p className='text-center mt-4'>
                    <Link
                        to="/login"
                        state={{ from: location }} // guarda a rota anterior
                        className='text-blue-500 hover:text-blue-700'
                    >
                        Clique aqui para fazer login
                    </Link>
                </p>
            </div>
        </DefaultPage>
    ) : (
        <Outlet />
    );
};

export default ProtectedRoute;
