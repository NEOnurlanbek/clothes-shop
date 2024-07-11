import { Injectable } from '@nestjs/common';

@Injectable()
export class ClothesBatchService {
  getHello(): string {
    return 'Hello World!';
  }
}
