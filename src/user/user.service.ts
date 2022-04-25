import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Role, RoleDocument } from './schemas/role.schema';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(Role.name)
    private readonly roleModel: Model<RoleDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto);
    createdUser.password = await createdUser.encryptPassword(
      createdUser.password,
    );
    let foundRole;
    if (createdUser.role) {
      foundRole = await this.roleModel
        .findOne({
          name: createdUser.role,
        })
        .exec();
    } else {
      foundRole = await this.roleModel
        .findOne({
          name: 'user',
        })
        .exec();
    }

    if (foundRole) {
      createdUser.role = foundRole._id;
    }
    return createdUser.save();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username: username }).exec();
  }

  async findAll(): Promise<UserDocument[]> {
    return await this.userModel.find().exec();
  }

  async update(username: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel
      .findOneAndUpdate({ username: username }, updateUserDto, { new: true })
      .exec();
  }

  async remove(username: string): Promise<User> {
    return this.userModel.findOneAndRemove({ username: username }).exec();
  }

  async findRole(id: number): Promise<Role | undefined> {
    return this.roleModel.findOne({ _id: id }).exec();
  }
}
