import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero } from 'src/models/hero.model';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  async create(@Body() createHeroDto: CreateHeroDto) {
    await this.heroesService.create(createHeroDto);
  }

  @Get()
  async getAll(): Promise<Hero[]> {
    return this.heroesService.getAll();
  }

}
