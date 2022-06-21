import { Injectable } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour, TourDocument } from './entities/tour.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TourService {
  constructor(
    @InjectModel(Tour.name)
    private readonly tourModel: Model<TourDocument>,
  ) {}

  async create(createTourDto: CreateTourDto) {
    const createdTour = new this.tourModel(createTourDto);

    return await createdTour.save();
  }

  async findYear(year: number): Promise<Tour[]> {
    return await this.tourModel.find({ year: year }).exec();
  }

  async findOne(id: number): Promise<Tour> {
    return await this.tourModel.findOne({ id: id }).exec();
  }

  async update(id: number, updateTourDto: UpdateTourDto) {
    return await this.tourModel
      .findOneAndUpdate({ id: id }, updateTourDto, {
        new: true,
      })
      .exec();
  }

  async remove(id: number) {
    return await this.tourModel.findOneAndDelete({ id: id }).exec();
  }

  async findAllToursByBrotherhoodName(brotherhoodId: string): Promise<Tour[]> {
    return await this.tourModel
      .find({ brotherhood: brotherhoodId })
      .populate(['streets'])
      .exec();
  }
}
