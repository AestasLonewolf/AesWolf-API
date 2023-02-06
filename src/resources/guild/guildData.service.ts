import { Injectable } from '@nestjs/common'
import { User, UserDocument } from '../user/entities/user.entity'
import { InjectModel } from '@nestjs/mongoose/dist'
import { Model } from 'mongoose'

@Injectable()
export class GuildDataService {
  constructor(
    @InjectModel(User.name)
    private readonly userRepo: Model<UserDocument>,
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
