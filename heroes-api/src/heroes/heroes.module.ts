import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { HeroSchema } from './schemas/heroes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Heroes', schema: HeroSchema }]),
  ],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
