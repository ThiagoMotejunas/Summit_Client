import React from 'react'
import { Link } from 'react-router-dom';

interface NavbarButtonProps {
    icon: React.ReactNode;
    label: string;
    link: string;
    selected: boolean;
    className?: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ link, icon, label, selected, className }) => {
    return (
        <Link to={link}
            className={'flex flex-col justify-start items-center'}
                >
            <span className={
                `relative flex justify-center items-center w-[3rem] aspect-square rounded-full text-2xl outline-white transition duration-500 ease-out ` +
                `${
                    selected ? 
                    "-translate-y-[1.2rem] bg-blue-400 text-white outline-[6px] "  + 
                    "after:absolute after:content-[''] after:left-[3.1rem] after:w-[1rem] after:h-[1rem] after:translate-y-[-.5rem] after:bg-transparent after:rounded-bl-full after:shadow-[-4px_4px_0_0_white] " +
                    "before:absolute before:content-[''] before:right-[3.2rem] before:w-[1rem] before:h-[1rem] before:translate-y-[-.5rem] before:bg-transparent before:rounded-br-full before:shadow-[4px_4px_0_0_white] " : 'outline-[0]'} `
                }>{icon}</span>
            <span className={`-mt-2`}>{label}</span>
        </Link>
    )
}

export default NavbarButton