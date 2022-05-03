import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Role } from './role.schema';

export type UserDocument = User & mongoose.Document;

@Schema({ versionKey: false, timestamps: true })
export class User extends mongoose.Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ ref: 'Role', type: mongoose.Schema.Types.ObjectId, required: true })
  role: Role;

  // eslint-disable-next-line @typescript-eslint/ban-types
  encryptPassword: Function;

  // eslint-disable-next-line @typescript-eslint/ban-types
  comparePassword: Function;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.encryptPassword = async function encryptPassword(
  password: string,
): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.comparePassword = async function comparePassword(
  password: string,
  receivedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(password, receivedPassword);
};
