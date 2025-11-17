import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { UserDTO } from '@project-valkyrie/dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): UserDTO {
    return {
      id: '123',
      email: 'nest@monorepo.com',
      fullName: 'NestJS Backend',
      role: 'admin',
    };
  }
}
