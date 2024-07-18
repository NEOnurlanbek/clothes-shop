import { Module } from '@nestjs/common';
import { ClothesBatchController } from './clothes-batch.controller';
import { ClothesBatchService } from './clothes-batch.service';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ ConfigModule.forRoot(),],
  controllers: [ClothesBatchController],
  providers: [ClothesBatchService],
})
export class ClothesBatchModule {}
