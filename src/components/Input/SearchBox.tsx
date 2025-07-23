import React from 'react'
import { CiSearch } from 'react-icons/ci'

interface SearchBoxProps {
    placeholder: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder }) => {
    return (
        <div className='flex items-center gap-2 py-2 px-4 ring ring-gray-400 rounded-sm'>
            <CiSearch />
            <input 
                type="text" 
                placeholder={placeholder} 
                className='w-full outline-none'/>
        </div>
    )
}

export default SearchBox