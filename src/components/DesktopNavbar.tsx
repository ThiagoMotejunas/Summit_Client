import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { IoPerson } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';

import MenuButtons from '../util/menu';
import DesktopNavbarButton from './DesktopNavbarButton';

const DesktopNavbar: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <header className='fixed top-0 w-full h-18 bg-white shadow-md hidden lg:block'>
            <nav className="lg:flex h-full gap-12 px-4 ">
                {/* LOGO */}
                <div className='flex h-full items-center xl:flex-1/3'>
                    <h1 className='text-blue-400 text-2xl font-bold text-nowrap' style={{ fontFamily: 'Fascinate, cursive' }}>Projeto Summit</h1>
                </div>
                {/* MENU */}
                <div className={`realtive w-full bg-white py-4 shadow shadow-md shadow-gray-900/20 lg:flex lg:py-0 lg:items-center lg:justify-between lg:w-full lg:h-full lg:shadow-none xl:flex-2/3`}>
                    {/* MENU LINKS */}
                    <div className='flex items-center h-full gap-2 xl:w-1/2 xl:justify-center'>
                        {
                            MenuButtons.map((button, index) => (
                                button.desktop &&

                                <DesktopNavbarButton key={index} link={button.link} icon={button.icon} label={button.label} />
                            ))
                        }
                    </div>
                    {/* MENU PROFILE OPTIONS */}
                    <div className='mt-2 lg:mt-0 xl:w-content'>
                        {
                            user ?
                            (
                                <div className='flex items-center justify-end gap-2 w-full'>
                                    <Link
                                        to={'/profile'}
                                        className="flex items-center gap-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center">
                                        <IoPerson />
                                        Perfil
                                    </Link>
                                    <button className="flex justify-center items-center gap-2 ring ring-blue-600 text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-700" onClick={logout}>
                                        <FiLogOut />
                                        <span>Sair</span>
                                    </button>
                                </div>
                            ) : (

                                < div className='flex items-center gap-2 w-full'>
                                    <Link
                                        to={'/login'}
                                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center">
                                        Entrar
                                    </Link>
                                    <Link
                                        to={'/register'}
                                        className="w-full ring ring-blue-600 text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-700 text-center">
                                        Cadastrar
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default DesktopNavbar;
