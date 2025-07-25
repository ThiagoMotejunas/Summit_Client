import React from 'react'
import type { CarrierCardDto } from '../dtos/CarrierCardDto'
import CarrierCard from '../components/CarrierCard'

const CarriersPage: React.FC = () => {
  return (
    <div className='w-screen min-h-full px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50/7D'>
      <section>
        <h1 className='text-3xl text-center text-blue-500/80 font-medium tracking-[8px]' style={{ fontFamily: 'Oswald, sans-serif' }}>EXPLORE OS CURSOS MAIS PROCURADOS</h1>
        <p className='text-lg text-center text-gray-600 mt-2'>Descubra formações qualificadas em diferentes campos proffisionais.</p>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {
          Carriers.map((carrier, index) => (
            <CarrierCard key={index} carrier={carrier} />
          ))
        }
      </section>
    </div>
  )
}

export default CarriersPage

const Carriers: CarrierCardDto[] = [
  {
    id: 323,
    name: 'Tecnologia',
    description: 'Programação, desenvolvimento web, mobile, inteligência artificial e muito mais.',
    coursesAmount: 141
  },{
    id: 123,
    name: 'Marketing',
    description: 'Marketing digital, publicidade, branding, redes sociais e estratégias de vendas.',
    coursesAmount: 89
  }
];