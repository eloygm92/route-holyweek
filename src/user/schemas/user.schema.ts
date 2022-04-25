import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema({ versionKey: false, timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ ref: 'Role', type: Types.ObjectId, required: true })
  role: Types.ObjectId;

  encryptPassword: (password: string) => Promise<string>;

  comparePassword: (
    password: string,
    receivedPassword: string,
  ) => Promise<boolean>;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.static(
  'encryptPassword',
  async function encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  },
);

UserSchema.static(
  'comparePassword',
  async function comparePassword(
    password: string,
    receivedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, receivedPassword);
  },
);
