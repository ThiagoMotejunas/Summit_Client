import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

interface NavbarButtonProps {
    icon: React.ReactNode;
    label: string;
    link: string;
}

const DesktopNavbarButton: React.FC<NavbarButtonProps> = ({ link, icon, label }) => {

    const [selected, setSelected] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
            const locBase = location.pathname.split("/")[1] || "";
            const linkBase = link.split("/")[1] || ""; 
    
            setSelected(locBase === linkBase);
        }, [location.pathname, link]);

    return (
        <Link
            to={link}
            className={`
                relative flex items-center gap-2 h-full px-4 text-gray-700 text-nowrap text-lg 
                transition duration-300 ease-in-out
                after:absolute after:bottom-0 after:right-0 after:content-[""] after:h-1 after:w-0 after:bg-blue-400
                after:transition-[width] after:duration-500 after:ease-out
                ${selected ?
                    'after:left-0 font-semibold bg-blue-400/20 ring ring-blue-200 after:w-full' :
                    'bg-white hover:text-white hover:bg-blue-400/80'
                }
            `}>
            {icon}
            <span>{label}</span>
        </Link>
    )
}

export default DesktopNavbarButton