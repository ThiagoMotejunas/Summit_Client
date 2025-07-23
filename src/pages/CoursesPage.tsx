import React, { useState } from 'react'
import FilterItemsList from '../components/Input/FilterItemsList'
import SelectBox from '../components/Input/SelectBox';
import CourseCard from '../components/CourseCard';
import type { CourseCardDto } from '../dtos/CourseCardDTO';
import SearchBox from '../components/Input/SearchBox';

const CoursesPage: React.FC = () => {
    const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>(CoursesCategoryFilters[0]);
    return (
        <div className='min-h-full px-8 py-20 bg-gradient-to-br from-blue-200 to-blue-100'>
            <section>
                <h1 className='text-2xl text-center text-blue-500/80 font-medium tracking-[8px]' style={{ fontFamily: 'Oswald, sans-serif' }}>EXPLORE OS CURSOS MAIS PROCURADOS</h1>
                <p className='text-sm text-center text-gray-600 mt-2'>Descubra formações qualificadas em diferentes campos proffisionais.</p>
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
            <section className='w-full grid grid-cols-[repeat(auto-fit,minmax(24rem,1fr))] place-items-center gap-4 mt-8'>
                {
                    Courses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))
                }
            </section>
        </div>
    )
}

export default CoursesPage

const CoursesCategoryFilters = ['Todos', 'Tecnologia', 'Marketing', 'Design', 'Ciência de Dados', 'Gestão', 'Idiomas'];

const Courses: CourseCardDto[] = [
    {
        id: 323,
        name: 'Engenharia de Software',
        description: 'Curso completo de engenharia de software com foco em desenvolvimento de sistemas e metodologias ágeis.',
        yearsDuration: 4,
        type: 'Bacharelado',
        category: {
            id: 1,
            name: 'Tecnologia'
        },
        instituition: {
            id: 1,
            name: 'Instituição de Tecnologia'
        }
    },
    {
        id: 323,
        name: 'Engenharia de Software',
        description: 'Curso completo de engenharia de software com foco em desenvolvimento de sistemas e metodologias ágeis.',
        yearsDuration: 4,
        type: 'Bacharelado',
        category: {
            id: 1,
            name: 'Tecnologia'
        },
        instituition: {
            id: 1,
            name: 'Instituição de Tecnologia'
        }
    },
    {
        id: 123,
        name: 'Marketing Digital',
        description: 'Formação em marketing digital com ênfase em estratégias online, mídias sociais e análise de dados.',
        yearsDuration: 2,
        type: 'Tecnólogo',
        category: {
            id: 2,
            name: 'Marketing'
        },
        instituition: {
            id: 2,
            name: 'Escola de Negócios'
        }
    },
    {
        id: 324,
        name: 'Ciência da Computação',
        description: 'Abrange algoritmos, estruturas de dados, IA e segurança da informação.',
        yearsDuration: 4,
        type: 'Bacharelado',
        category: {
            id: 1,
            name: 'Tecnologia'
        },
        instituition: {
            id: 2,
            name: 'Escola de Negócios'
        }
    },
    {
        
        id: 200,
        name: 'Enfermagem',
        description: 'Curso de formação em cuidados clínicos, ética e saúde pública.',
        yearsDuration: 4,
        type: 'Bacharelado',
        category: {
            id: 3,
            name: 'Marketing'
        },
        instituition: {
            id: 2,
            name: 'Escola de Negócios'
        }
    }
];
