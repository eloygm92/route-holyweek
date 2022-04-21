import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tour, TourSchema } from './entities/tour.entity';
import { BrotherhoodModule } from '../brotherhood/brotherhood.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
    BrotherhoodModule,
  ],
  controllers: [TourController],
  providers: [TourService],
})
export class TourModule {}
