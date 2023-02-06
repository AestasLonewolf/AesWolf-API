import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { User, UserSchema } from './entities/user.entity'
import { GuildService } from '../guild/guild.service'
import { HttpModule } from '@nestjs/axios/dist/http.module'
import { MongooseModule } from '@nestjs/mongoose/dist'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), HttpModule],
  providers: [UserResolver, UserService, GuildService],
})
export class UserModule {}
