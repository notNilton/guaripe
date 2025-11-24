import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '@project-valkyrie/dtos';
import { IUserResponse } from '@project-valkyrie/interfaces';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = []; // In-memory storage

  create(createUserDto: CreateUserDto): IUserResponse {
    const newUser: User = {
      id: Date.now().toString(), // Simple ID generation
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
      backupEmail: createUserDto.backupEmail,
      phoneNumber: createUserDto.phoneNumber,
      age: createUserDto.age,
    };
    this.users.push(newUser);

    // Return without password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userResponse } = newUser;
    return userResponse;
  }

  findAll(): IUserResponse[] {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return this.users.map(({ password, ...user }) => user);
  }

  findOne(id: string): IUserResponse | null {
    const user = this.users.find((user) => user.id === id);
    if (!user) return null;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userResponse } = user;
    return userResponse;
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  update(id: string, updateUserDto: UpdateUserDto): IUserResponse | null {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...(updateUserDto as Partial<User>),
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userResponse } = this.users[userIndex];
      return userResponse;
    }
    return null;
  }

  remove(id: string): IUserResponse | null {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      const deletedUser = this.users[userIndex];
      this.users.splice(userIndex, 1);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userResponse } = deletedUser;
      return userResponse;
    }
    return null;
  }
}
