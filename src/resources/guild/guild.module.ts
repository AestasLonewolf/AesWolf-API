import { GuildResolver } from './guild.resolver'
import { Guild } from './entities/guild.entity'
import { GuildService } from './guild.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

@Module({
  imports: [TypeOrmModule.forFeature([Guild])],
  providers: [GuildResolver, GuildService],
})
export class GuildModule {}
