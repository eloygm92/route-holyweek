import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { Days } from '../../Utils/Days.enum';

export class CreateBrotherhoodDto {
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  public name: string;

  @IsString({ message: 'El nick debe ser un string' })
  @IsNotEmpty({ message: 'El nick no puede estar vacío' })
  public nick: string;

  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'El año de fundación debe ser un string' },
  )
  @IsOptional()
  public foundation: number;

  @IsString({ message: 'La Iglesia debe ser un string' })
  @IsOptional()
  public church: string;

  @IsString({ message: 'La dirección debe ser un string' })
  @IsOptional()
  public address: string;

  @IsNotEmpty({ message: 'El dia de procesion no puede estar vacío' })
  @IsEnum(Days, {
    message: 'El dia de procesion debe ser un dia de la Semana Santa',
  })
  public procession_day: Days;
}
