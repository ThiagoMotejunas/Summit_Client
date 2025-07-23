import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

interface SelectBoxProps {
    items: string[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ items, selectedValue, setSelectedValue }) => {
    const [shown, setShown] = useState<boolean>(false);

    const toggleMenuShown = () => {
        setShown(prev => !prev);
    }

    const handleItemClick = (value: string) => {
        setSelectedValue(value);
        setShown(false);
    }

    const close = () => {
        setShown(false);
    }

    return (
        <div className={`relative md:hidden`}>
            <div className='flex items-center justify-between rounded-md py-2 px-4 ring ring-gray-400'>
                <p onClick={close}>{selectedValue}</p>
                <button
                    onClick={toggleMenuShown}
                    className={`
                        outline-none transition-transform ease-in-out duration-300
                        transform
                        ${shown ? 'rotate-[540deg]' : 'rotate-0'}
                    `}>
                    <IoIosArrowDown />
                </button>
            </div>
            {
                shown && (

                    <div className='absolute top-12 left-0 w-full p-2 bg-white rounded-lg'>
                        <ul className='flex flex-col justify-center items-center gap-2'>
                            {
                                items.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleItemClick(item)}
                                        className={`
                                    p-2 rounded-md w-full
                                    ${selectedValue === item ? 'bg-gray-900 text-gray-100 font-semibold' : 'bg-transparent text-gray-900'}
                                    `}>
                                        <p>
                                            {item}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default SelectBox