import { CreateGuildInput } from './dto/create-guild.input'
import { UpdateGuildInput } from './dto/update-guild.input'
import { Guild } from './entities/guild.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { ObjectId } from 'mongodb'
import { User } from '../user/entities/user.entity'

@Injectable()
export class GuildDataService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  findTopUsersByGuid(guid: string) {
    return this.userRepo.find({
      where: {
        guilds: {
          guid: guid,
        },
      },
      order: {
        guilds: {
          exp: 'ASC',
        },
      },
      take: 10,
    })
  }
}
