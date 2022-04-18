import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateBrotherhoodDto } from './dto/create-brotherhood.dto';
import { UpdateBrotherhoodDto } from './dto/update-brotherhood.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Brotherhood, BrotherhoodDocument } from './schemas/brotherhood.schema';

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
    return this.brotherhoodModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} brotherhood`;
  }

  update(id: number, updateBrotherhoodDto: UpdateBrotherhoodDto) {
    return `This action updates a #${id} brotherhood`;
  }

  remove(id: number) {
    return `This action removes a #${id} brotherhood`;
  }
}
