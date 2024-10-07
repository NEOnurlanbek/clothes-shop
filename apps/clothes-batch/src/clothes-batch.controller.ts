import { Controller, Get, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { BATCH_ROLLBACK, BATCH_TOP_AGENTS, BATCH_TOP_PROPERTIES } from './libs/config';
import { BatchService } from './clothes-batch.service';

@Controller()
export class BatchController {
  private logger: Logger = new Logger("BatchController");

  constructor(private readonly batchService: BatchService) {}


@Timeout(1000)
handleTimeout() {
  this.logger.debug('BATCH SERVER READY');
}

@Cron("00 00 01 * * *", { name: BATCH_ROLLBACK})   // bu decorator JOB SCHEDULE yasashga kerak ekan
public async batchRollback() {
  try {
     this.logger["context"] = BATCH_ROLLBACK;
     this.logger.debug('EXECUTED!');
     await this.batchService.batchRollback();
   } catch(err) {
    this.logger.error(err);
  }


}    

@Cron("20 00 01 * * *", { name: BATCH_TOP_PROPERTIES})
public async batchTopProperties() {
  try {
    this.logger["context"] = BATCH_TOP_PROPERTIES;
    this.logger.debug('EXECUTED!');
    await this.batchService.batchProperties();
  } catch(err) {
   this.logger.error(err);
 }
}  

@Cron("40 00 01 * * *", { name: BATCH_TOP_AGENTS})   // bu decorator JOB SCHEDULE yasashga kerak ekan
public async batchTopAgents() {
  try {
    this.logger["context"] = BATCH_TOP_AGENTS;
    this.logger.debug('EXECUTED!');
    await this.batchService.batchTopAgents();
  } catch(err) {
   this.logger.error(err);
 }
}  


   /*
  @Interval(1000)
  handleInterval() {
  this.logger.debug('INTERVAL TEST');
  }
  */

  

  @Get()
  getHello(): string {
    return this.batchService.getHello();
  }
}
