import { Module } from '@nestjs/common';
import { ClothesBatchController } from './clothes-batch.controller';
import { ClothesBatchService } from './clothes-batch.service';

@Module({
  imports: [],
  controllers: [ClothesBatchController],
  providers: [ClothesBatchService],
})
export class ClothesBatchModule {}
