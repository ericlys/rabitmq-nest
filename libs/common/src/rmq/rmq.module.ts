import { Module } from '@nestjs/common';
import { RmqService } from './rmq.serice';

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {}
