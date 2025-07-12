export default interface User {
  id: string;
  name: string;
  email: string;
  //GET ALL USER PROPERTIES
}

export interface UserLoginPayloadDTO {
  login: string;
  password: string;
}