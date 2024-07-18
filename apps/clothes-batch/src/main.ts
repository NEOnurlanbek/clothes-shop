import { NestFactory } from '@nestjs/core';
import { ClothesBatchModule } from './clothes-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(ClothesBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
