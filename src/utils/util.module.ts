import { Module } from '@nestjs/common'
import { UtilController } from './util.controller'
import { UtilService } from './util.service'

@Module({
  imports: [],
  controllers: [UtilController],
  providers: [UtilService],
})
export class UtilModule {}
