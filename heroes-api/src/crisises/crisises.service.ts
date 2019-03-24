import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateCrisisDto } from './dto/create-crisis.dto';
import { Crisis } from './interfaces/crisis.interface';

@Injectable()
export class CrisisesService {

  constructor(
    @InjectModel('Crisises') private readonly crisisModel: Model<Crisis>,
  ) {}

  async create(createCrisisDto: CreateCrisisDto): Promise<Crisis> {
    const createdCrisis = new this.crisisModel(createCrisisDto);
    return await createdCrisis.save();
  }

  async getAll(): Promise<Crisis[]> {
    return await this.crisisModel.find().exec();
  }
}
