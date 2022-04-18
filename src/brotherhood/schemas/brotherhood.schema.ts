import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
  foundation: string;

  @Prop()
  church: string;

  @Prop()
  address: string;

  @Prop()
  procession_day: string;

  @Prop()
  start: string;

  @Prop()
  tribune: string;

  @Prop()
  grove: string;

  @Prop()
  cathedral: string;

  @Prop()
  end: string;
}

export const BrotherhoodSchema = SchemaFactory.createForClass(Brotherhood);
