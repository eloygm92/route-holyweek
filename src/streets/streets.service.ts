import { Injectable } from '@nestjs/common';
import { CreateStreetDto } from './dto/create-street.dto';
import { UpdateStreetDto } from './dto/update-street.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Street, StreetDocument } from './entities/street.entity';
import { Model } from 'mongoose';

@Injectable()
export class StreetsService {
  constructor(
    @InjectModel(Street.name)
    private streetModel: Model<StreetDocument>,
  ) {}

  async create(createStreetDto: CreateStreetDto): Promise<StreetDocument> {
    const createdStreet = new this.streetModel(createStreetDto);
    return createdStreet.save();
  }

  async findAll(): Promise<Street[]> {
    return await this.streetModel.find().select('-geoJson').exec();
  }

  async findOne(streetName: string): Promise<StreetDocument> {
    return await this.streetModel
      .findOne({ name: { $regex: `^${streetName}$`, $options: 'i' } })
      .exec();
  }

  async update(streetName: string, updateStreetDto: UpdateStreetDto) {
    return await this.streetModel
      .findOneAndUpdate(
        { name: { $regex: `^${streetName}$`, $options: 'i' } },
        updateStreetDto,
        { new: true },
      )
      .exec();
  }

  remove(streetName: string): Promise<Street> {
    return this.streetModel
      .findOneAndDelete({
        streetName: { $regex: `^${streetName}$`, $options: 'i' },
      })
      .exec();
  }
}
