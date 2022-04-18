import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateBrotherhoodDto } from './dto/create-brotherhood.dto';
import { UpdateBrotherhoodDto } from './dto/update-brotherhood.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Brotherhood, BrotherhoodDocument } from './schemas/brotherhood.schema';
import { Days } from '../Utils/Days';

@Injectable()
export class BrotherhoodService {
  constructor(
    @InjectModel(Brotherhood.name)
    private brotherhoodModel: Model<BrotherhoodDocument>,
  ) {}

  async create(
    createBrotherhoodDto: CreateBrotherhoodDto,
  ): Promise<BrotherhoodDocument> {
    const createdBrotherhood = new this.brotherhoodModel(createBrotherhoodDto);
    return createdBrotherhood.save();
  }

  async findAll(): Promise<Brotherhood[]> {
    return await this.brotherhoodModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} brotherhood`;
  }

  async find(day: Days): Promise<Brotherhood[]> {
    return await this.brotherhoodModel.find({ procession_day: day }).exec();
  }

  update(id: number, updateBrotherhoodDto: UpdateBrotherhoodDto) {
    return `This action updates a #${id} brotherhood`;
  }

  async remove(nick: string): Promise<Brotherhood> {
    return this.brotherhoodModel.findOneAndDelete({ nick: nick }).exec();
  }
}
