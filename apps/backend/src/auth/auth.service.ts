import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, RegisterDto } from '@project-valkyrie/dtos';
import { IAuthResponse } from '@project-valkyrie/interfaces';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  register(registerDto: RegisterDto): IAuthResponse {
    return this.usersService.create(registerDto);
  }

  login(loginDto: LoginDto): IAuthResponse {
    const user = this.usersService.findByEmail(loginDto.email);
    if (user && user.password === loginDto.password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
