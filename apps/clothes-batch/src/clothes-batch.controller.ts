import { Controller, Get } from '@nestjs/common';
import { ClothesBatchService } from './clothes-batch.service';

@Controller()
export class ClothesBatchController {
  constructor(private readonly clothesBatchService: ClothesBatchService) {}

  @Get()
  getHello(): string {
    return this.clothesBatchService.getHello();
  }
}
