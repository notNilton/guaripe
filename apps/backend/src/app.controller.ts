import { Controller, Get } from '@nestjs/common';
import type { UserDTO } from '@project-valkyrie/dtos';
import { AppService } from './app.service';

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
      name: 'NestJS Backend',
      email: 'nest@monorepo.com',
      phoneNumber: '+1234567890',
      age: 1,
    };
  }
}
