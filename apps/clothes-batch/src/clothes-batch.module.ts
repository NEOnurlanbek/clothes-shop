import { Module } from '@nestjs/common';
import { ClothesBatchController } from './clothes-batch.controller';
import { ClothesBatchService } from './clothes-batch.service';
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ ConfigModule.forRoot(), DatabaseModule,],
  controllers: [ClothesBatchController],
  providers: [ClothesBatchService],
})
export class ClothesBatchModule {}
