import React, { use, useEffect, useState } from 'react'
import FilterItemsList from '../components/Input/FilterItemsList'
import SelectBox from '../components/Input/SelectBox';
import CourseCard from '../components/CourseCard';
import type { CourseCardDto } from '../dtos/CourseCardDTO';
import SearchBox from '../components/Input/SearchBox';
import DefaultPage from '../components/DefaultPage';
import { useParams } from 'react-router-dom';

const CoursesPage: React.FC = () => {
    const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>(CoursesCategoryFilters[0]);
    const [courses, setCourses] = useState<CourseCardDto[]>([]); // Assuming you will fetch or filter courses based on the selected category

    const { carrierId } = useParams();

    useEffect(() => {
        if (carrierId){
            setCourses(CoursesDB.filter(course => course.carriers.includes(Number(carrierId))));
        }
        else {
            setCourses(CoursesDB);
        }
    }, [carrierId]);

    return (
        <DefaultPage >
            <div className='mx-auto px-4 md:px-20 lg:px-32 xl:px-40'>
                <section>
                    <h1 className='text-2xl text-center text-blue-500/80 font-medium tracking-[8px] md:text-3xl md:tracking-[.8rem]' style={{ fontFamily: 'Oswald, sans-serif' }}>EXPLORE OS CURSOS MAIS PROCURADOS</h1>
                    <p className='text-lg text-center text-gray-600 mt-2'>Descubra formações qualificadas em diferentes campos proffisionais.</p>
                </section>
                <section className='mt-12'>
                    <SearchBox placeholder='Buscar cursos...' />
                    <div className='mt-6'>
                        <div className='hidden sm:block'>
                            <FilterItemsList items={CoursesCategoryFilters} selectedValue={selectedCategoryFilter} setSelectedValue={setSelectedCategoryFilter} />
                        </div>
                        <div className='block sm:hidden'>
                            <SelectBox items={CoursesCategoryFilters} selectedValue={selectedCategoryFilter} setSelectedValue={setSelectedCategoryFilter} />
                        </div>
                    </div>
                </section>
                <section className='w-full grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))] place-items-center gap-4 mt-8'>
                    {
                        courses.map((course, index) => (
                            <CourseCard key={index} course={course} />
                        ))
                    }
                </section>
            </div>
        </DefaultPage>
    )
}

export default CoursesPage

const CoursesCategoryFilters = ['Todos', 'Tecnologia', 'Marketing', 'Design', 'Ciência de Dados', 'Gestão', 'Idiomas'];

const CoursesDB: CourseCardDto[] = [
    {
        id: 1,
        name: 'Engenharia de Software',
        description: 'Curso completo de engenharia de software com foco em desenvolvimento de sistemas e metodologias ágeis.',
        yearsDuration: 4,
        type: 'Bacharelado',
        carriers:[1],
        category: {
            id: 1,
            name: 'Tecnologia'
        },
        instituition: {
            id: 1,
            name: 'Instituição de Tecnologia'
        },
        favorite: true
    },
    {
        id: 2,
        name: 'Engenharia de Software',
        description: 'Curso completo de engenharia de software com foco em desenvolvimento de sistemas e metodologias ágeis.',
        yearsDuration: 4,
        type: 'Bacharelado',
        carriers:[1, 2],
        category: {
            id: 1,
            name: 'Tecnologia'
        },
        instituition: {
            id: 1,
            name: 'Instituição de Tecnologia'
        },
        favorite: false
    },
    {
        id: 3,
        name: 'Marketing Digital',
        description: 'Formação em marketing digital com ênfase em estratégias online, mídias sociais e análise de dados.',
        yearsDuration: 2,
        type: 'Tecnólogo',
        carriers:[2],
        category: {
            id: 2,
            name: 'Marketing'
        },
        instituition: {
            id: 2,
            name: 'Escola de Negócios'
        },
        favorite: false
    },
    {
        id: 4,
        name: 'Ciência da Computação',
        description: 'Abrange algoritmos, estruturas de dados, IA e segurança da informação.',
        yearsDuration: 4,
        type: 'Bacharelado',
        carriers:[1, 2],
        category: {
            id: 1,
            name: 'Tecnologia'
        },
        instituition: {
            id: 2,
            name: 'Escola de Negócios'
        },
        favorite: false
    },
    {

        id: 5,
        name: 'Enfermagem',
        description: 'Curso de formação em cuidados clínicos, ética e saúde pública.',
        yearsDuration: 4,
        type: 'Bacharelado',
        carriers:[2],
        category: {
            id: 3,
            name: 'Marketing'
        },
        instituition: {
            id: 2,
            name: 'Escola de Negócios'
        },
        favorite: false
    }
];
