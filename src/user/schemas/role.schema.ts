import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type RoleDocument = Role & mongoose.Document;

@Schema({ versionKey: false, timestamps: true })
export class Role extends mongoose.Document {
  @Prop({ required: true, unique: true })
  name: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
