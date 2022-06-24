import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Brotherhood } from '../../brotherhood/schemas/brotherhood.schema';
import { Street } from '../../streets/entities/street.entity';

export type TourDocument = Tour & mongoose.Document;

@Schema({ versionKey: false, timestamps: true })
export class Tour extends mongoose.Document {
  @Prop({ required: true })
  year: number;

  /*@Prop([{ type: String, required: true }])
  hours: string[];*/

  @Prop([
    { ref: 'Street', type: mongoose.Schema.Types.ObjectId, required: true },
  ])
  streets: Street[];

  @Prop({ required: true })
  start: string;

  @Prop({ required: true })
  tribune: string;

  @Prop({ required: true })
  grove: string;

  @Prop({ required: true })
  cathedral: string;

  @Prop({ required: true })
  end: string;

  @Prop({
    ref: 'Brotherhood',
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  brotherhood: Brotherhood;
}

export const TourSchema = SchemaFactory.createForClass(Tour);
