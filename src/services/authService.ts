import type { LoginPayloadDTO, LoginResponseDTO, RegisterPayload, ResgisterResponseDTO } from "../dtos/authentication";
import api from "./axios";

export const loginUser = async (userData: LoginPayloadDTO): Promise<LoginResponseDTO> => {
    return {
        user: {
            id: '1',
            name: 'vitor',
            email: userData.login
        },
        token: 'senha:' + userData.password
    }
    const response = await api.post<LoginResponseDTO>('/api/login', userData);
    return response.data;
};

export const registerUser = async (userData: RegisterPayload): Promise<ResgisterResponseDTO> => {
    return {
        user: {
            id: '1',
            name: 'vitor',
            email: userData.login
        },
        token: 'senha:' + userData.password
    }
    const response = await api.post<LoginResponseDTO>('/api/register', userData);
    return response.data;
}