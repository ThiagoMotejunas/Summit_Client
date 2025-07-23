import React from 'react'

interface FilterItemsListProps {
    items: string[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}

const FilterItemsList: React.FC<FilterItemsListProps> = ({ items, selectedValue, setSelectedValue }) => {

    return (
        <ul className={`flex flex-wrap items-center justify-center gap-4`}>
            {
                items.map((item, index) => (
                    <li
                        key={index}
                        className={`
                            px-4 py-2 rounded-md
                            ${selectedValue === item ? 'bg-gray-900 text-gray-100 font-medium' : 'bg-gray-100 text-gray-900 ring ring-gray-600'}
                        `}
                        onClick={() => setSelectedValue(item)}>
                        <p className='text-nowrap'>{item}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default FilterItemsList