import { createContext, useState, useEffect, type ReactNode, use } from 'react';
import type User from '../dtos/user';
import { loginUser, registerUser } from '../services/authService';
import type { LoginPayloadDTO, RegisterPayload } from '../dtos/authentication';


interface AuthContextType {
    user: User | null;
    login: (loginPayload: LoginPayloadDTO) => Promise<void>;
    logout: () => void;
    register: (loginPayload: RegisterPayload) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        console.log(`AuthContext - Load - getting user: ${storedUser}`)
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = async (loginPayload: LoginPayloadDTO) => {
        try {
            const { user, token } = await loginUser(loginPayload);
            console.log(`AuthContext - LOGIN - User: ${user}\nToken ${token}`)
            setUser(user);
            setToken(token);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        } catch (error) {
            console.error(error);
            //Handle login errors
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    const register = async (registerPayload: RegisterPayload) => {try {
            const { user, token } = await registerUser(registerPayload);
            console.log(`AuthContext - REGISTER - User: ${user}\nToken ${token}`)
            setUser(user);
            setToken(token);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        } catch (error) {
            console.error(error);
            //Handle login errors
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
