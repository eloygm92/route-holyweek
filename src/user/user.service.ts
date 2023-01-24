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
    let createdUser = new this.userModel(createUserDto);
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
          name: 'User',
        })
        .exec();
    }

    if (foundRole) {
      createdUser.role = foundRole._id;
    }
    return createdUser.save();
  }

  async findOne(id: string): Promise<User | undefined> {
    return await this.userModel
      .findOne({ id: id })
      .populate({ path: 'role' })
      .exec();
  }

  async findAll(): Promise<UserDocument[]> {
    return await this.userModel
      .find()
      .select('-password')
      .populate({ path: 'role' })
      .exec();
  }

  async update(username: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findOne({ username: username }).exec();

    if (
      updateUserDto.password &&
      !user.comparePassword(user.password, updateUserDto.password)
    ) {
      updateUserDto.password = await user.encryptPassword(
        updateUserDto.password,
      );
    }
    const role = await this.roleModel
      .findOne({ _id: updateUserDto.role })
      .exec();
    if (role !== user.role) {
      updateUserDto.role = role._id;
    }
    return await this.userModel
      .findOneAndUpdate({ username: username }, updateUserDto, { new: true })
      .exec();
  }

  async remove(username: string): Promise<User> {
    return this.userModel.findOneAndRemove({ username: username }).exec();
  }

  async findRole(id: number): Promise<Role | undefined> {
    return this.roleModel.findOne({ _id: id }).exec();
  }

  async findAllRole(): Promise<Role[]> {
    return this.roleModel.find().exec();
  }
}
