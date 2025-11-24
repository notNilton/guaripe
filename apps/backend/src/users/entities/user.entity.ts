import { IUser } from '@project-valkyrie/interfaces';

export class User implements IUser {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  backupEmail?: string;
  phoneNumber!: string;
  age!: number;
}
