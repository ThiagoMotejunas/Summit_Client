import React from 'react';
import NavbarButton from './NavbarButton';


import MenuButtons from '../util/menu';


const MobileNavbar: React.FC = () => {

    return (
        <div className='fixed bottom-0 w-full h-18 bg-white shadow-[0_-4px_6_-1_black] lg:hidden'>
            <nav className='flex justify-around items-center h-full px-[4vw] md:justify-center md:gap-12'>
                {
                    MenuButtons.map((button, index) => (
                        <NavbarButton key={index} icon={button.icon} label={button.label} link={button.link} />
                    ))
                }
            </nav>
        </div>
    );
};

export default MobileNavbar;