import { Module } from '@nestjs/common';
import { StreetsService } from './streets.service';
import { StreetsController } from './streets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Street, StreetSchema } from './entities/street.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Street.name, schema: StreetSchema }]),
  ],
  controllers: [StreetsController],
  providers: [StreetsService],
})
export class StreetsModule {}
