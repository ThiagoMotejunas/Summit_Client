import React from 'react'
import { FaGraduationCap, FaNetworkWired } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DefaultPage from '../components/DefaultPage'

const NotFound: React.FC = () => {
    return (
        <DefaultPage >
            <div className='flex flex-col items-center max-w-lg my-auto'>
                <h1 className='text-8xl text-blue-400 font-bold'>404</h1>
                <p className='text-lg text-gray-600 font-semibold text-center mt-6'>Parece que você não encontrou o que está procurando, mas tudo bem, você pode encontrar os cursos ou carreiras por aqui!</p>
                <div className='flex justify-center items-center gap-4 w-full mt-8'>
                    <Link to="/courses"
                        className={`flex items-center justify-center gap-2 w-full text-gray-700 text-lg py-2 rounded-lg bg-blue-400 ring ring-blue-200 text-white font-semibold`}>
                        <FaGraduationCap />
                        <span>Cursos</span>
                    </Link>
                    <Link to="/carriers"
                        className={`flex items-center justify-center gap-2 w-full text-gray-700 text-lg py-2 rounded-lg bg-blue-400 ring ring-blue-200 text-white font-semibold`}>
                        <FaNetworkWired />
                        <span>Carreiras</span>
                    </Link>
                </div>
                <Link to={'/'} className='flex items-center justify-center gap-2 w-full text-lg py-2 rounded-lg ring ring-blue-400 text-blue-400 font-semibold mt-4'>Voltar para home</Link>
            </div>
        </DefaultPage>
    )
}

export default NotFound