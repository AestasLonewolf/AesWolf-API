import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { GuildService } from '../guild/guild.service'
import { Guild } from '../guild/entities/guild.entity'
import { HttpModule } from '@nestjs/axios/dist/http.module'

@Module({
  imports: [TypeOrmModule.forFeature([User, Guild]), HttpModule],
  providers: [UserResolver, UserService, GuildService],
})
export class UserModule {}
