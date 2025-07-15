import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGraduationCap, FaHome, FaStar } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth';
import NavbarButton from './NavbarButton';
import { IoPerson } from 'react-icons/io5';

const MobileNavbar: React.FC = () => {
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
        <div className='fixed bottom-0 w-full bg-white'>
            <nav className='flex justify-center items-center gap-1 h-18'>
                <NavbarButton icon={<FaHome />} label='Home' link='/' selected={location.pathname === '/'}/>
                <NavbarButton icon={<FaGraduationCap />} label='Carreiras' link='/carrear' selected={location.pathname === '/carrear'}/>
                <NavbarButton icon={<FaGraduationCap />} label='Cursos' link='/courses' selected={location.pathname === '/courses'}/>
                <NavbarButton icon={<FaStar />} label='Favoritos' link='/favorites' selected={location.pathname === '/favorites'}/>
                <NavbarButton icon={<IoPerson />} label='Perfil' link='/profile' selected={location.pathname === '/profile'}/>
            </nav>
        </div>
    );
};

export default MobileNavbar;
