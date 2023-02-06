import { HttpModule } from '@nestjs/axios/dist/http.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { User } from './entities/user.entity'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'
import { GuildDataService } from '../guild-data/guild-data.service'
import { GuildData } from '../guild-data/entities/guild-data.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, GuildData]), HttpModule],
  providers: [UserResolver, UserService, GuildDataService],
})
export class UserModule {}
