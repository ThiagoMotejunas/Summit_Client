import React, { useEffect, useState } from 'react'

interface LoginTypeTabProps {
    value: number;
    setValue: (value: number) => void;
}

const LoginTypeTab: React.FC<LoginTypeTabProps> = ({ value, setValue }) => {

    return (
        <div className='relative flex justify-center items-center gap-2 p-1 bg-gray-400 rounded-xl overflow-hidden w-full'>
            {
                loginTypes.map((loginType, index) => (
                    <button
                        key={index}
                        className={`
                            flex-1 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out
                            ${value === index ? 'bg-white text-gray-900' : 'bg-transparent text-gray-600'}
                        `}
                        onClick={() => setValue(index)}
                    >
                        {loginType}
                    </button>
                ))
            }
        </div>
    )
}

export default LoginTypeTab

const loginTypes = ['Aluno', 'Instituição'];