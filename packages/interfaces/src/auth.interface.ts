export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export type UserRole = 'ADMIN' | 'USER' | 'MANAGER';
export type UserStatus = 'PENDING' | 'ACTIVE' | 'INACTIVE';

export interface IAuthResponse {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}

export interface IJwtPayload {
  userId: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}

export interface IAuthenticatedRequest {
  user: IJwtPayload;
}
