import { Module } from '@nestjs/common';
import { BrotherhoodService } from './brotherhood.service';
import { BrotherhoodController } from './brotherhood.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Brotherhood, BrotherhoodSchema } from './schemas/brotherhood.schema';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Brotherhood.name, schema: BrotherhoodSchema },
    ]),
  ],
  controllers: [BrotherhoodController],
  providers: [
    BrotherhoodService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [BrotherhoodService],
})
export class BrotherhoodModule {}
