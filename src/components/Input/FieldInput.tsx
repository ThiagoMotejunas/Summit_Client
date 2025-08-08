import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface FieldInputProps {
    isPassword?: boolean;
    label: string;
    value: string;
    setValue: (value: string) => void;
}

const FieldInput: React.FC<FieldInputProps> = ({ isPassword, label, value, setValue }) => {
    const [showPassword, setShowPassword] = useState(!isPassword);
    return (
        <div>
            <label htmlFor="email">{label}:</label>
            <div className='flex items-center ring ring-gray-300 p-2 rounded-lg focus-within:ring-blue-500 mt-1'>
                <input
                    type={isPassword && !showPassword ? "password" : "text"}
                    name="email"
                    id="email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='flex-1 outline-none bg-transparent'
                    placeholder={label}
                />
                {
                    isPassword &&
                    <div onClick={() => setShowPassword(prev => !prev)}>
                        {
                            showPassword ?
                                <IoMdEyeOff /> :
                                <IoMdEye />
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default FieldInput