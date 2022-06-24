import { config } from 'dotenv';
config();

export const jwtConstants = {
  secret: process.env.JWT_SECRET,
  refreshSecret: process.env.REFRESHJWT_SECRET,
};
