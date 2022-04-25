import { Module } from '@nestjs/common';
import { StreetsService } from './streets.service';
import { StreetsController } from './streets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Street, StreetSchema } from './entities/street.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Street.name, schema: StreetSchema }]),
  ],
  controllers: [StreetsController],
  providers: [
    StreetsService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class StreetsModule {}
