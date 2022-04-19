import { Module } from '@nestjs/common';
import { BrotherhoodService } from './brotherhood.service';
import { BrotherhoodController } from './brotherhood.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Brotherhood, BrotherhoodSchema } from './schemas/brotherhood.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Brotherhood.name, schema: BrotherhoodSchema },
    ]),
  ],
  controllers: [BrotherhoodController],
  providers: [BrotherhoodService],
})
export class BrotherhoodModule {}
