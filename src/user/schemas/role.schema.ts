import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RoleDocument = Role & Document;

@Schema({ versionKey: false, timestamps: true })
export class Role {
  @Prop({ required: true, unique: true })
  name: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
