import { Module } from '@nestjs/common'
import { FetchAdapter } from './adapters/Fetch.adapter'

@Module({
  providers: [FetchAdapter],
  exports: [FetchAdapter],
})
export class CommonModule {}
