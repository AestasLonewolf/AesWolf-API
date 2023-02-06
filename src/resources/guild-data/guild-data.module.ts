import { GuildDataResolver } from './guild-data.resolver'
import { GuildDataService } from './guild-data.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { Guild } from '../guild/entities/guild.entity'
import { GuildData } from './entities/guild-data.entity'
import { GuildService } from '../guild/guild.service'
import { User } from '../user/entities/user.entity'
import { UserService } from '../user/user.service'

@Module({
  imports: [TypeOrmModule.forFeature([GuildData, Guild, User])],
  providers: [GuildDataResolver, GuildDataService, GuildService, UserService],
})
export class GuildDataModule {}
