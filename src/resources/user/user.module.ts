import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { User, UserSchema } from './entities/user.entity'
import { GuildService } from '../guild/guild.service'
import { HttpModule } from '@nestjs/axios/dist/http.module'
import { MongooseModule } from '@nestjs/mongoose/dist'
import { Guild, GuildSchema } from '../guild/entities/guild.entity'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Guild.name, schema: GuildSchema },
    ]),
    HttpModule,
  ],
  providers: [UserResolver, UserService, GuildService],
})
export class UserModule {}
