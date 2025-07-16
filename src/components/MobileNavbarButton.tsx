import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

interface NavbarButtonProps {
    icon: React.ReactNode;
    label: string;
    link: string;
}

const MobileNavbarButton: React.FC<NavbarButtonProps> = ({ link, icon, label }) => {

    const [selected, setSelected] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        setSelected(location.pathname === link)
    }, [location])

    return (
        <Link to={link}
            className={'flex flex-col justify-start items-center'}
        >
            <span className={
                `relative flex justify-center items-center w-[3rem] aspect-square rounded-full text-2xl outline-white transition duration-500 delay-50 ease-in-out ` +
                `${selected ?
                    "-translate-y-[1.8rem] bg-blue-400 text-white outline-[6px] " +
                    "after:absolute after:content-[''] after:left-[3.2rem] after:w-[1rem] after:h-[1rem] after:translate-y-[-.5rem] after:bg-transparent after:rounded-bl-full after:shadow-[-4px_4px_0_0_white] " +
                    "before:absolute before:content-[''] before:right-[3.2rem] before:w-[1rem] before:h-[1rem] before:translate-y-[-.5rem] before:bg-transparent before:rounded-br-full before:shadow-[4px_4px_0_0_white] " : 'outline-[0]'} `
            }>{icon}</span>
            <span className={
                `-mt-2 transition duration-500 ease-in-out ` +
                `${selected ? '-translate-y-[1rem] text-blue-400 text-md font-semibold' : ''}`
                }>{label}</span>
        </Link>
    )
}

export default MobileNavbarButton