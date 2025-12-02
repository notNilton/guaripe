import { UserRole, UserStatus } from './auth.interface';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUser {
  name?: string;
  email?: string;
  password?: string;
  role?: UserRole;
  status?: UserStatus;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}
