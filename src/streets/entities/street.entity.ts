import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { TypeStreet } from '../../utils/TypeStreet.enum';

export type StreetDocument = Street & mongoose.Document;

@Schema({ versionKey: false, timestamps: true })
export class Street extends mongoose.Document {
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  name: string;

  @Prop({
    type: Object,
    unique: true,
    required: true,
  })
  geoJson: object;

  @Prop({
    required: true,
  })
  type: TypeStreet;
}

export const StreetSchema = SchemaFactory.createForClass(Street);
