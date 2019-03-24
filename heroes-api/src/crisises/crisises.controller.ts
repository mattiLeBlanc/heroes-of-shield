import { Controller, Get, Post, Body } from '@nestjs/common';
import { CrisisesService } from './crisises.service';
import { CreateCrisisDto } from './dto/create-crisis.dto';
import { Crisis } from './interfaces/crisis.interface';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('crisises')
@Controller('crisises')
export class CrisisesController {
  constructor(private readonly crisisesService: CrisisesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async create(@Body() createCrisisDto: CreateCrisisDto) {
    await this.crisisesService.create(createCrisisDto);
  }

  @Get()
  async getAll(): Promise<Crisis[]> {
    return this.crisisesService.getAll();
  }

}
