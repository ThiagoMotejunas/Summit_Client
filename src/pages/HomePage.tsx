import { FaGraduationCap, FaNetworkWired } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DefaultPage from '../components/DefaultPage';

const HomePage = () => {

    return (
        <DefaultPage >
            <div className='flex flex-col justify-center items-center max-w-lg mx-auto h-full md:max-w-3xl'>
                <h1 className='text-4xl text-center text-blue-500/80 font-medium tracking-[8px] md:text-5xl md:font-normal md:max-w-xl md:tracking-[12px]' style={{ fontFamily: 'Oswald, sans-serif' }}>DESPERTE SEU POTENCIAL</h1>
                <p className='text-center text-gray-600 font-normal mt-2 md:max-w-xl md:mt-6 md:text-lg'>Explore cursos, descubra áreas de trabalho que combinam com você e comece hoje a jornada a carreira dos seus sonhos.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 place-items-center max-w-5xl md:mx-auto md:mt-6'>
                    <div className='flex flex-col justify-center items-center gap-2 max-w-sm bg-white p-4 shadow shadow-md shadow-gray-700/60 rounded-lg text-center'>
                        <FaGraduationCap className='text-8xl text-gray-900' />
                        <h2 className='text-xl font-bold text-gray-900'>Explorar por Curso</h2>
                        <p className='text-gray-700 text-sm'>Navegue por nossa coleção de cursos organizados por catergoria e encontre exatamente o que procura</p>
                        <Link to={'/courses'} className='bg-gray-900 w-full py-2 rounded-lg text-white mt-2'>
                            Ver Cursos
                        </Link>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 max-w-sm bg-white p-4 shadow shadow-md shadow-gray-700/60 rounded-lg text-center'>
                        <FaNetworkWired className='text-8xl text-gray-900' />
                        <h2 className='text-xl font-bold text-gray-900'>Explorar por Área</h2>
                        <p className='text-gray-700 text-sm'>Descubra diferentes áreas de trabalho e os cursos disponíveis para cada carreira</p>
                        <Link to={'/carriers'} className='ring ring-gray-400 w-full py-2 rounded-lg text-gray-900 font-medium mt-2'>
                            Carreiras
                        </Link>
                    </div>
                </div>
            </div>
        </DefaultPage>
    )
}

export default HomePage