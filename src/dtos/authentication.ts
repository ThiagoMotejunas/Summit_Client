export interface LoginResponseDTO {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

export interface LoginPayloadDTO {
  login: string;
  password: string;
}
