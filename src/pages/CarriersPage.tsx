import React from 'react'
import type { CarrierCardDto } from '../dtos/CarrierCardDto'
import CarrierCard from '../components/CarrierCard'
import DefaultPage from '../components/DefaultPage'

const CarriersPage: React.FC = () => {
  return (
    <DefaultPage >
      <div className='ex flex-col justify-center items-center max-w-lg mx-auto h-full md:max-w-3xl'>
        <section>
          <h1 className='text-3xl text-center text-blue-500/80 font-medium tracking-[8px]' style={{ fontFamily: 'Oswald, sans-serif' }}>EXPLORE OS CURSOS MAIS PROCURADOS</h1>
          <p className='text-lg text-center text-gray-600 mt-2'>Descubra formações qualificadas em diferentes campos proffisionais.</p>
        </section>
        <section className='w-full grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))] place-items-center gap-4 mt-8'>
          {
            Carriers.map((carrier, index) => (
              <CarrierCard key={index} carrier={carrier} />
            ))
          }
        </section>
      </div>
    </DefaultPage>
  )
}

export default CarriersPage

const Carriers: CarrierCardDto[] = [
  {
    id: 323,
    name: 'Tecnologia',
    description: 'Programação, desenvolvimento web, mobile, inteligência artificial e muito mais.',
    coursesAmount: 141
  }, {
    id: 123,
    name: 'Marketing',
    description: 'Marketing digital, publicidade, branding, redes sociais e estratégias de vendas.',
    coursesAmount: 89
  }
];