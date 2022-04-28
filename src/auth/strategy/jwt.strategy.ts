import {Injectable, UnauthorizedException} from '@nestjs/common';
import { jwtConstants } from '../constants';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '../../user/schemas/user.schema';
import {UserService} from "../../user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  /*async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }*/
  async validate(payload: any): Promise<User> {
    const { username } = payload;
    const user = await this.userService.findOne({ username });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
