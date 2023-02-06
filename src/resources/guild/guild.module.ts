import { Module } from '@nestjs/common'
import { GuildService } from './guild.service'
import { GuildDataResolver, GuildResolver } from './guild.resolver'
import { Guild, GuildSchema } from './entities/guild.entity'
import { GuildDataService } from './guildData.service'
import { MongooseModule } from '@nestjs/mongoose/dist'
import { User, UserSchema } from '../user/entities/user.entity'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Guild.name, schema: GuildSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [GuildResolver, GuildService, GuildDataResolver, GuildDataService],
})
export class GuildModule {}
