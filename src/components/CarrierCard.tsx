import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IoIosCode } from 'react-icons/io';
import { BsGraphUpArrow } from 'react-icons/bs';
import type { CarrierCardDto } from '../dtos/CarrierCardDto';

const IconClass = {
    tecnologia: {
        card_bg: "bg-gradient-to-r from-blue-50 to-blue-100/80",
        icon: <IoIosCode />,
        icon_bg: 'bg-gradient-to-r from-blue-400 to-blue-600',
        ring: 'ring ring-blue-200'
    },
    marketing: {
        card_bg: "bg-gradient-to-r from-green-50 to-green-100/80",
        icon: <BsGraphUpArrow />,
        icon_bg: 'bg-gradient-to-r from-green-400 to-green-600',
        ring: 'ring ring-green-200'
    },
} as const;

type CarrierKey = keyof typeof IconClass;

interface CarrierCardProp {
    carrier: CarrierCardDto;
}

const CarrierCard: React.FC<CarrierCardProp> = ({ carrier }) => {
    const carrierKey = carrier.name.toLowerCase() as CarrierKey;

    const carrierConfig = IconClass[carrierKey] || {
        card_bg: "bg-gradient-to-r from-gray-50 to-gray-100/80",
        icon: <IoBookOutline />,
        icon_bg: 'bg-gradient-to-r from-gray-400 to-gray-600',
    };

    return (
        <div className={`p-4 rounded-xl shadow-sm cursor-pointer ${carrierConfig.card_bg}`}>
            <div className='flex justify-center'>
                <div className={`flex justify-center items-center w-[4rem] aspect-square rounded-full ${carrierConfig.icon_bg} text-3xl text-white`}>
                    {carrierConfig.icon}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 mt-4'>
                <h2 className='text-center font-semibold text-lg'>{carrier.name}</h2>
                <p className='text-gray-700 text-sm text-center'>{carrier.description}</p>
                <p className={`py-1 px-4 ${carrierConfig.card_bg} shadow-sm ${carrierConfig.ring} rounded-full text-center text-xs text-gray-900`}>
                    {carrier.coursesAmount} cursos disponível
                </p>
            </div>
            <div className={`w-full text-center py-2 rounded-lg ${carrierConfig.icon_bg} text-white font-semibold shadow-sm ring ring-gray-300 mt-4`}>
                <Link to={`/courses/q?carrier=${carrier.id}`} className='w-full py-2'>
                    Ver Cursos
                </Link>
            </div>
        </div>
    );
};

export default CarrierCard;
