import { Module } from '@nestjs/common'
import { GuildService } from './guild.service'
import { GuildDataResolver, GuildResolver } from './guild.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Guild } from './entities/guild.entity'
import { GuildData } from './entities/guildData.entity'
import { GuildDataService } from './guildData.service'
import { User } from '../user/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Guild, GuildData, User])],
  providers: [GuildResolver, GuildService, GuildDataResolver, GuildDataService],
})
export class GuildModule {}
