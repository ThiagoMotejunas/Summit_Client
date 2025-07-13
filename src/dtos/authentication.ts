export interface LoginPayloadDTO {
  login: string;
  password: string;
}

export interface LoginResponseDTO {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

//REGISTRATION
export interface RegisterPayload {
  login: string;
  password: string;
}

export interface ResgisterResponseDTO {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}