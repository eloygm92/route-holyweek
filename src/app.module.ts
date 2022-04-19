import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BrotherhoodModule } from './brotherhood/brotherhood.module';

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
  ],
})
export class AppModule {}
