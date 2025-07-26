import React, { useState } from 'react'
import { IoMdEye } from "react-icons/io";

interface FieldInputProps {
    isPassword?: boolean;
    label: string;
    value: string;
    setValue: (value: string) => void;
}

const FieldInput: React.FC<FieldInputProps> = ({ isPassword, label, value, setValue }) => {
    const [showPassword, setShowPassword] = useState(isPassword);
    return (
        <div>
            <label htmlFor="email">{label}</label>
            <input
                type={isPassword ? "password" : "text"}
                name="email"
                id="email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {
                isPassword &&
                <div>
                    {
                        showPassword ?
                            <IoMdEye onClick={() => setShowPassword(false)} /> :
                            <IoMdEye onClick={() => setShowPassword(true)} />
                    }
                </div>
            }
        </div>
    )
}

export default FieldInput