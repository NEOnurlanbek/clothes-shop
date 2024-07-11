import { NestFactory } from '@nestjs/core';
import { ClothesBatchModule } from './clothes-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(ClothesBatchModule);
  await app.listen(3000);
}
bootstrap();
