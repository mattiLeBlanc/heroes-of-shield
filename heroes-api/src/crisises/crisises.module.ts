import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrisisesController } from './crisises.controller';
import { CrisisesService } from './crisises.service';
import { CrisisSchema } from './schemas/crisises.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Crisises', schema: CrisisSchema }]),
  ],
  controllers: [CrisisesController],
  providers: [CrisisesService],
})
export class CrisisesModule {}
