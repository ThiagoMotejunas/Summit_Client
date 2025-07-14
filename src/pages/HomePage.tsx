import { FaGraduationCap } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth';

const HomePage = () => {

    const { user } = useAuth();

    return (
        <div className='min-h-screen px-6 pt-36 bg-gradient-to-br from-blue-200 to-blue-100'>
            <div>
                <h1 className='text-4xl text-center text-blue-500/80 font-medium tracking-[8px]' style={{ fontFamily: 'Oswald, sans-serif' }}>DESPERTE SEU POTENCIAL</h1>
                <p className='text-center text-gray-600 font-normal mt-2'>Explore cursos, descubra áreas de trabalho que combinam com você e comece hoje a jornada a carreira dos seus sonhos.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 place-items-center max-w-5xl md:mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-2 max-w-sm bg-white p-4 shadow shadow-md shadow-gray-700/60 rounded-lg text-center'>
                        <FaGraduationCap className='text-8xl text-gray-900' />
                        <h2 className='text-xl font-bold text-gray-900'>Explorar por Curso</h2>
                        <p className='text-gray-700 text-sm'>Navegue por nossa coleção de cursos organizados por catergorua e encontre exatamente o que procura</p>
                        <button className='bg-gray-900 w-full py-2 rounded-lg text-white mt-2'>
                            Ver Cursos
                        </button>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 max-w-sm bg-white p-4 shadow shadow-md shadow-gray-700/60 rounded-lg text-center'>
                        <FaGraduationCap className='text-8xl text-gray-900' />
                        <h2 className='text-xl font-bold text-gray-900'>Explorar por Área</h2>
                        <p className='text-gray-700 text-sm'>Descubra diferentes áreas de trabalho e os cursos disponíveis para cada carreira</p>
                        <button className='ring ring-gray-400 w-full py-2 rounded-lg text-gray-900 font-medium mt-2'>
                            Ver Cursos
                        </button>
                    </div>
                </div>
                <h1>{user?.name}</h1>
                <p>{user?.id}</p>
                <p>{user?.email}</p>
            </div>
        </div>
    )
}

export default HomePage