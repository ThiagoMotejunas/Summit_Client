import React from 'react'
import { CiClock2 } from 'react-icons/ci';
import { RiGraduationCapLine } from 'react-icons/ri';
import { IoBookOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import type { CarrierCardDto } from '../dtos/CarrierCardDto';

interface CarrierCardProp {
  carrier: CarrierCardDto;
}

const CarrierCard: React.FC<CarrierCardProp> = ({ carrier }) => {
  return (
    <div className='flex flex-col justify-between bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-[24rem] h-full'>
      <div>
        <div className='flex items-center justify-between w-full'>
          <p className='py-1.5 px-4 w-fit text-xs text-gray-800 bg-blue-100/60 font-semibold rounded-full'>{carrier.category.name}</p>
          <span className='text-xl text-gray-900'>
            {carrier.favorite ? <TiStarFullOutline /> : <TiStarOutline />}
          </span>
        </div>
        <div className='mt-4 w-full'>
          <p className='text-md text-gray-900 font-bold'>{carrier.name}</p>
          <p className='text-sm text-gray-600 mt-1'>{carrier.description}</p>
        </div>
        <div className='flex items-center justify-between my-4 w-full'>
          <span className='flex items-center gap-1 text-gray-600'>
            <CiClock2 className='text-md' />
            <p className='text-sm'>
              {carrier.yearsDuration} anos
            </p>
          </span>
          <div className='flex items-center gap-2'>
            <RiGraduationCapLine className='text-gray-500' />
            <span className='py-1 px-2 rounded-full ring ring-gray-400'>
              <p className='text-xs font-medium text-gray-900'>{carrier.type}</p>
            </span>
          </div>
        </div>
        <div className='w-full'>
          <p className='text-sm text-gray-500 font-medium'>Por: {carrier.instituition.name}</p>
        </div>
      </div>
      <Link to={`/carriers/${carrier.id}`} className='flex items-center justify-center bg-gray-900 py-2 rounded-sm mt-6 w-full'>
        <IoBookOutline />
        <p className='font-semibold text-gray-100'>
          Ver detalhes
        </p>
      </Link>
    </div>
  )
}

export default CarrierCard