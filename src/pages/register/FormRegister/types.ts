export interface IRegister {
  name: string;
  email: string;
  password: string;
  validatePassword?: string;
}

export interface iDefaultErrorResponse {
  error: string;
}
