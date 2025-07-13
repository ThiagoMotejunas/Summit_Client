import type { LoginPayloadDTO, LoginResponseDTO } from "../dtos/authentication";
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