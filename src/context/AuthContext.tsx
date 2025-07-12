import { createContext, useState, useEffect, type ReactNode } from 'react';
import type User from '../dtos/user';
import { loginUser } from '../services/authService';
import type { LoginPayloadDTO } from '../dtos/authentication';


interface AuthContextType {
    user: User | null;
    login: (loginPayload: LoginPayloadDTO) => Promise<void>;
    logout: () => void;
}

// ✅ Exporting AuthContext here
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = async (loginPayload: LoginPayloadDTO) => {
        try {
            const { user, token } = await loginUser(loginPayload);
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        } catch (error) {
            console.error(error);
            // Optionally: handle login errors
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
