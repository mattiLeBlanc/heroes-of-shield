import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero } from './interfaces/hero.interface';

@Injectable()
export class HeroesService {

  constructor(
    @InjectModel('Heroes') private readonly heroModel: Model<Hero>,
  ) {}

  async create(createHeroDto: CreateHeroDto): Promise<Hero> {
    const createdHero = new this.heroModel(createHeroDto);
    return await createdHero.save();
  }

  async getAll(): Promise<Hero[]> {
    return await this.heroModel.find().exec();
  }
}
