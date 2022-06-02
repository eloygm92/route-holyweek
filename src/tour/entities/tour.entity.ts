import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Brotherhood } from '../../brotherhood/schemas/brotherhood.schema';
import { Street } from '../../streets/entities/street.entity';

export type TourDocument = Tour & mongoose.Document;

@Schema({ versionKey: false, timestamps: true })
export class Tour extends mongoose.Document {
  @Prop({ type: String, required: true })
  year: number;

  @Prop([{ type: String, required: true }])
  hours: string[];

  @Prop([
    { type: mongoose.Schema.Types.ObjectId, ref: 'Street', required: true },
  ])
  streets: Street[];

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  brotherhood: Brotherhood;
}

export const TourSchema = SchemaFactory.createForClass(Tour);
