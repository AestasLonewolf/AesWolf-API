import { Module } from '@nestjs/common'
import { GuildService } from './guild.service'
import { GuildDataResolver, GuildResolver } from './guild.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Guild } from './entities/guild.entity'
import { GuildData } from './entities/guildData.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Guild, GuildData])],
  providers: [GuildDataResolver, GuildResolver, GuildService],
})
export class GuildModule {}
