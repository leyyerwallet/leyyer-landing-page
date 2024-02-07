export interface UserCredentials {
  email: string;
  password: string;
}

export interface SignInResponse {
  auth: boolean;
  token: string;
}
