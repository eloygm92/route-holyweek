import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Days } from '../../utils/Days.enum';

export type BrotherhoodDocument = Brotherhood & mongoose.Document;

@Schema({ versionKey: false, timestamps: true })
export class Brotherhood extends mongoose.Document {
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
