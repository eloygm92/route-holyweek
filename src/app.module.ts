import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BrotherhoodModule } from './brotherhood/brotherhood.module';
import { StreetsModule } from './streets/streets.module';
import { TourModule } from './tour/tour.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://' +
        process.env.MONGODB_USE +
        ':' +
        process.env.MONGODB_PASS +
        '@holyweek.h149l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    BrotherhoodModule,
    StreetsModule,
    TourModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
