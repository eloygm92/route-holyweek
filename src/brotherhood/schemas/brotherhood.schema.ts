import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Days } from '../../Utils/Days.enum';

export type BrotherhoodDocument = Brotherhood & Document;

@Schema()
export class Brotherhood {
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  nick: string;

  @Prop()
  foundation: number;

  @Prop()
  church: string;

  @Prop()
  address: string;

  @Prop()
  procession_day: Days;

  // TODO cambiar las horas a la entidad de recorrido
  /*@Prop()
  start: string;

  @Prop()
  tribune: string;

  @Prop()
  grove: string;

  @Prop()
  cathedral: string;

  @Prop()
  end: string;*/
}

export const BrotherhoodSchema = SchemaFactory.createForClass(Brotherhood);
