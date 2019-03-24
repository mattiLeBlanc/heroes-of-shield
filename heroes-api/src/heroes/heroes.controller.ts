import { Controller, Get, Post, Body } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero, HeroCreateResponse } from 'src/models/hero.model';
import { ApiResponse, ApiCreatedResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('heroes')
@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: HeroCreateResponse })
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async create(@Body() createHeroDto: CreateHeroDto) {
    return await this.heroesService.create(createHeroDto);
  }

  @Get()
  async getAll(): Promise<Hero[]> {
    return this.heroesService.getAll();
  }

}
