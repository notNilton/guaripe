import { IUser, UserRole, UserStatus } from '@project-valkyrie/interfaces';

export class User implements IUser {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  role!: UserRole;
  status!: UserStatus;
  createdAt!: Date;
  updatedAt!: Date;
}
