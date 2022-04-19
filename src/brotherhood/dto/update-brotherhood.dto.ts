import { PartialType } from '@nestjs/mapped-types';
import { CreateBrotherhoodDto } from './create-brotherhood.dto';

export class UpdateBrotherhoodDto extends PartialType(CreateBrotherhoodDto) {}
