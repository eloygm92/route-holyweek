import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  // TODO change this for real data of Mongoose
  private readonly users: User[];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
