import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TourDocument = Tour & Document;

@Schema({ versionKey: false, timestamps: true })
export class Tour {
  @Prop({ type: String, required: true })
  year: number;

  @Prop([{ type: String, required: true }])
  hours: string[];

  @Prop([{ type: Types.ObjectId, ref: 'Street', required: true }])
  streets: Types.ObjectId[];

  @Prop({ type: String, required: true })
  start: string;

  @Prop({ type: String, required: true })
  tribune: string;

  @Prop({ type: String, required: true })
  grove: string;

  @Prop({ type: String, required: true })
  cathedral: string;

  @Prop({ type: String, required: true })
  end: string;

  @Prop({ type: Types.ObjectId, required: true })
  brotherhood: Types.ObjectId;
}

export const TourSchema = SchemaFactory.createForClass(Tour);
