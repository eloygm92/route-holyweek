import { Types } from 'mongoose';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'El nombre de usuario tiene que ser un string' })
  @IsNotEmpty({ message: 'El nombre de usuario no puede ser vacío' })
  public username: string;

  @IsString({ message: 'El email tiene que ser un string' })
  @IsNotEmpty({ message: 'El email no puede ser vacío' })
  public email: string;

  @IsString({ message: 'La contraseña tiene que ser un string' })
  @IsNotEmpty({ message: 'La contraseña no puede ser vacía' })
  public password: string;

  @IsOptional()
  public role: Types.ObjectId;
}
