import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Days } from '../../utils/Days.enum';

export type BrotherhoodDocument = Brotherhood & Document;

@Schema({ versionKey: false, timestamps: true })
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
}

export const BrotherhoodSchema = SchemaFactory.createForClass(Brotherhood);
