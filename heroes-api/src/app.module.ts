import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisesModule } from './crisises/crisises.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://alfred:goodman@localhost:27017/heroes'),
    HeroesModule,
    CrisisesModule,
  ],
})
export class AppModule {}
