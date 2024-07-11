import { Test, TestingModule } from '@nestjs/testing';
import { ClothesBatchController } from './clothes-batch.controller';
import { ClothesBatchService } from './clothes-batch.service';

describe('ClothesBatchController', () => {
  let clothesBatchController: ClothesBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClothesBatchController],
      providers: [ClothesBatchService],
    }).compile();

    clothesBatchController = app.get<ClothesBatchController>(ClothesBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(clothesBatchController.getHello()).toBe('Hello World!');
    });
  });
});
