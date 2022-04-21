import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateTourDto {
  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'El año debe ser un número' },
  )
  @IsNotEmpty({ message: 'El año no puede estar vacío' })
  public year: number;

  @IsArray({ message: 'Las horas deben ser un array' })
  @ValidateNested({ each: true })
  @IsNotEmpty({ message: 'Las horas no pueden estar vacías' })
  public hours: string[];

  @IsArray({ message: 'Las calles deben ser un array' })
  @ValidateNested({ each: true })
  @IsNotEmpty({ message: 'Las calles no pueden estar vacías' })
  public streets: Types.ObjectId[];

  @IsString({ message: 'La hora de inicio tiene que ser un string' })
  @IsNotEmpty({ message: 'La hora de inicio no puede estar vacía' })
  public start: string;

  @IsString({ message: 'La hora de paso por tribuna tiene que ser un string' })
  @IsNotEmpty({ message: 'La hora de paso por tribuna no puede estar vacía' })
  public tribune: string;

  @IsString({ message: 'La hora de paso por Alameda tiene que ser un string' })
  @IsNotEmpty({ message: 'La hora de paso por Alameda no puede estar vacía' })
  public grove: string;

  @IsString({
    message:
      'La hora de paso por la torre sur de la catedral tiene que ser un string',
  })
  @IsNotEmpty({
    message:
      'La hora de paso por la torre sur de la catedral no puede estar vacía',
  })
  public cathedral: string;

  @IsString({ message: 'La hora del encierro tiene que ser un string' })
  @IsNotEmpty({ message: 'La hora del encierro no puede estar vacía' })
  public end: string;

  @IsNotEmpty({
    message: 'La cofradia a la que pertenece no puede estar vacías',
  })
  public brotherhood: Types.ObjectId;
}
