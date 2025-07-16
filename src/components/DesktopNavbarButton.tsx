import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

interface NavbarButtonProps {
    icon: React.ReactNode;
    label: string;
    link: string;
    className?: string;
}

const DesktopNavbarButton: React.FC<NavbarButtonProps> = ({ link, icon, label, className }) => {

    const [selected, setSelected] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        setSelected(location.pathname === link)
    }, [location])

    return (
        <Link
            to={link}
            className={`
                relative flex items-center gap-2 h-full px-4 text-gray-700 text-nowrap text-lg 
                transition duration-300 ease-in-out
                after:absolute after:bottom-0 after:left-0 after:content-[""] after:h-1 after:w-0 after:bg-blue-400
                after:transition-[width] after:duration-500 after:ease-out
                ${selected ?
                    'font-semibold bg-blue-400/20 ring ring-blue-200 after:w-full' :
                    'bg-white hover:text-white hover:bg-blue-400/80'
                }
            `}>
            {icon}
            <span>{label}</span>
        </Link>
    )
}

export default DesktopNavbarButton