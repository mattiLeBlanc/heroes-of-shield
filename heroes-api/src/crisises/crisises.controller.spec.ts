import { Test, TestingModule } from '@nestjs/testing';
import { CrisisesController } from './crisises.controller';
import { CrisisesService } from './crisises.service';

describe('AppController', () => {
  let crisisesController: CrisisesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CrisisesController],
      providers: [CrisisesService],
    }).compile();

    crisisesController = app.get<CrisisesController>(CrisisesController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(crisisesController.getHello()).toBe('Hello World!');
  //   });
  // });
});
