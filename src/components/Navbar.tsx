import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaGraduationCap, FaHome, FaStar } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { useAuth } from '../hooks/useAuth';
import { IoPerson } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';

const Navbar: React.FC = () => {
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
        <header className='fixed top-0 w-full h-16'>
            <nav className="lg:flex h-16 bg-white shadow-md">
                <div className='flex h-full px-4 items-center'>
                    <h1 className='text-blue-400 text-2xl font-bold text-nowrap' style={{ fontFamily: 'Fascinate, cursive' }}>Projeto Summit</h1>
                </div>
                <div className='lg:hidden absolute right-4 top-4 text-2xl'>
                    <button onClick={toggleMenu}>
                        <FaBars />
                    </button>
                </div>
                <div className={`${!isOpen ? 'hidden' : 'block'} bg-white px-4 py-4 shadow shadow-md shadow-gray-900/20 lg:flex lg:py-0 lg:items-center lg:justify-between lg:w-full lg:h-full lg:shadow-none`}>
                    <div className='lg:flex lg:items-center lg:h-full'>
                        <Link to="/"
                            className={`flex items-center justify-start gap-2 text-gray-700 text-lg px-4 py-2 rounded-lg ${location.pathname === '/' ? 'bg-blue-400/20 ring ring-blue-200' : 'bg-white'} hover:text-white hover:bg-blue-400/80`}
                            onClick={closeMenu}>
                            <FaHome />
                            <span>Home</span>
                        </Link>
                        <Link to="/cursos"
                            className={`flex items-center justify-start gap-2 text-gray-700 text-lg px-4 py-2 rounded-lg ${location.pathname === '/cursos' ? 'bg-blue-400/20 ring ring-blue-200' : 'bg-white'} hover:text-white hover:bg-blue-400/80`}
                            onClick={closeMenu}>
                            <FaGraduationCap />
                            <span>Crusos</span>
                        </Link>
                        <Link to="/areas"
                            className={`flex items-center justify-start gap-2 text-gray-700 text-lg px-4 py-2 rounded-lg ${location.pathname === '/areas' ? 'bg-blue-400/20 ring ring-blue-200' : 'bg-white'} hover:text-white hover:bg-blue-400/80`}
                            onClick={closeMenu}>
                            <GrUserWorker />
                            <span>Áreas de trabalho</span>
                        </Link>
                        {
                            user &&
                            <Link to="/favorites"
                                className={`flex items-center justify-start gap-2 text-gray-700 text-lg px-4 py-2 rounded-lg ${location.pathname === '/areas' ? 'bg-blue-400/20 ring ring-blue-200' : 'bg-white'} hover:text-white hover:bg-blue-400/80`}
                                onClick={closeMenu}>
                                <FaStar />
                                <span>Favoritos</span>
                            </Link>
                        }
                    </div>
                    <div className='mt-2 lg:mt-0'>
                        {
                            user ?
                                (
                                    <div className='flex items-center gap-2 w-full'>
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
        </header >
    );
};

export default Navbar;
