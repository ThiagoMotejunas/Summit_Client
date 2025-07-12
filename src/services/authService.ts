import type { LoginPayloadDTO, LoginResponseDTO } from "../dtos/authentication";
import api from "./axios";

export const loginUser = async (userData: LoginPayloadDTO): Promise<LoginResponseDTO> => {
    const response = await api.post<LoginResponseDTO>('/api/login', userData);
    return response.data;
};