import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ ref: 'Role', type: Types.ObjectId, required: true })
  role: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
