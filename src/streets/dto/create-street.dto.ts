import { IsString, IsNotEmpty, IsObject, IsEnum } from 'class-validator';
import { TypeStreet } from '../../Utils/TypeStreet.enum';

export class CreateStreetDto {
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  public name: string;

  @IsObject({ message: 'El geoJson debe ser un objeto valido' })
  @IsNotEmpty({ message: 'El geoJson no puede estar vacío' })
  public geoJson: object;

  @IsEnum(TypeStreet, { message: 'El tipo de calle debe ser un string valido' })
  @IsNotEmpty({ message: 'El tipo de calle no puede estar vacío' })
  public type: TypeStreet;
}
