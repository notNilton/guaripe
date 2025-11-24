import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsEmail()
  @IsOptional()
  backupEmail?: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber!: string;

  @IsNumber()
  @IsNotEmpty()
  age!: number;
}

// Alias para compatibilidade
export { UserDto as UserDTO };
