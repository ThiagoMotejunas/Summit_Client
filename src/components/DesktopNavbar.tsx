import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaGraduationCap, FaHome, FaStar } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { useAuth } from '../hooks/useAuth';
import { IoPerson } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';


import MenuButtons from '../util/menu';

const DesktopNavbar: React.FC = () => {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const closeMenu = () => setIsOpen(false)

    const handleLogoutButtonClick = () => {
        setIsOpen(false);
        if (user) {
            logout();
        }
    }

    return (
        <header className='fixed top-0 w-full h-18 bg-white shadow-md hidden lg:block'>
            <nav className="lg:flex h-full gap-12 px-4 ">
                {/* LOGO */}
                <div className='flex h-full items-center xl:flex-1/3'>
                    <h1 className='text-blue-400 text-2xl font-bold text-nowrap' style={{ fontFamily: 'Fascinate, cursive' }}>Projeto Summit</h1>
                </div>
                {/* MENU */}
                <div className={`${!isOpen ? 'hidden' : 'realtive'} w-full bg-white py-4 shadow shadow-md shadow-gray-900/20 lg:flex lg:py-0 lg:items-center lg:justify-between lg:w-full lg:h-full lg:shadow-none xl:flex-2/3`}>
                    {/* MENU LINKS */}
                    <div className='flex items-center h-full gap-2 xl:w-1/2 xl:justify-center'>
                        {
                            MenuButtons.map((button, index) => (
                                button.desktop &&
                                <Link
                                    key={index}
                                    to={button.link}
                                    className={`flex items-center justify-start gap-2 text-gray-700 text-nowrap text-lg px-4 py-2 rounded-lg ${location.pathname === button.link ? 'bg-blue-400/20 ring ring-blue-200' : 'bg-white'} hover:text-white hover:bg-blue-400/80`}
                                    onClick={closeMenu}>
                                    {button.icon}
                                    <span>{button.label}</span>
                                </Link>
                            ))
                        }
                    </div>
                    {/* MENU PROFILE OPTIONS */}
                    <div className='mt-2 lg:mt-0 xl:w-content'>
                        {
                            user ?
                                (
                                    <div className='flex items-center justify-end gap-2 w-full'>
                                        <button className="flex justify-center items-center gap-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={closeMenu}>
                                            <IoPerson />
                                            <span>Perfil</span>
                                        </button>
                                        <button className="flex justify-center items-center gap-2 ring ring-blue-600 text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-700" onClick={handleLogoutButtonClick}>
                                            <FiLogOut />
                                            <span>Sair</span>
                                        </button>
                                    </div>
                                ) : (

                                    < div className='flex items-center gap-2 w-full'>
                                        <Link
                                            to={'/login'}
                                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center"
                                            onClick={closeMenu}>
                                            Entrar
                                        </Link>
                                        <Link
                                            to={'/register'}
                                            className="w-full ring ring-blue-600 text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-700 text-center"
                                            onClick={closeMenu}>
                                            Cadastrar
                                        </Link>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </nav>
            {/* BURGER MENU BUTTON */}
            <div className='lg:hidden absolute right-4 top-4 text-2xl'>
                <button onClick={toggleMenu}>
                    <FaBars />
                </button>
            </div>
        </header >
    );
};

export default DesktopNavbar;
