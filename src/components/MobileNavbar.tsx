import React from 'react';
import MobileNavbarButton from './MobileNavbarButton';


import MenuButtons from '../util/menu';


const MobileNavbar: React.FC = () => {

    return (
        <div className='fixed bottom-0 w-full h-18 bg-white shadow-[0_-4px_6px_-1px_rgb(0_0_0_/_0.1),_0_-2px_4px_-2px_rgb(0_0_0_/_0.1)] lg:hidden'>
            <nav className='flex justify-around items-center h-full px-[4vw] md:justify-center md:gap-12'>
                {
                    MenuButtons.map((button, index) => (
                        <MobileNavbarButton key={index} icon={button.icon} label={button.label} link={button.link} />
                    ))
                }
            </nav>
        </div>
    );
};

export default MobileNavbar;