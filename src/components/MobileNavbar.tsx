import React from 'react';
import { FaGraduationCap, FaHome, FaStar } from 'react-icons/fa';
import NavbarButton from './NavbarButton';
import { IoPerson } from 'react-icons/io5';

const MobileNavbar: React.FC = () => {

    return (
        <div className='fixed bottom-0 w-full bg-white'>
            <nav className='flex justify-around items-center h-18 px-8'>
                <NavbarButton icon={<FaHome />} label='Home' link='/' />
                <NavbarButton icon={<FaGraduationCap />} label='Carreiras' link='/carrear' />
                <NavbarButton icon={<FaGraduationCap />} label='Cursos' link='/courses' />
                <NavbarButton icon={<FaStar />} label='Favoritos' link='/favorites' />
                <NavbarButton icon={<IoPerson />} label='Perfil' link='/profile' />
            </nav>
        </div>
    );
};

export default MobileNavbar;
