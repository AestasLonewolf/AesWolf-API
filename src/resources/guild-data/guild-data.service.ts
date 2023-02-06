import { CreateGuildDataInput } from './dto/create-guild-data.input'
import { UpdateGuildDataInput } from './dto/update-guild-data.input'
import { GuildData } from './entities/guild-data.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { ObjectId } from 'mongodb'

@Injectable()
export class GuildDataService {
  constructor(
    @InjectRepository(GuildData)
    private readonly guildDataRepo: Repository<GuildData>,
  ) {}

  create(createGuildDataInput: CreateGuildDataInput) {
    return this.guildDataRepo.save(createGuildDataInput)
  }

  findAll() {
    return this.guildDataRepo.find()
  }

  findAllByGuid(guid: string) {
    return this.guildDataRepo.findBy({ guid })
  }

  findAllByUid(uid: string) {
    return this.guildDataRepo.findBy({ uid })
  }

  findOne(uid: string, guid: string) {
    this.guildDataRepo.find({
      where: {
        guild: {
          guid: guid,
        },
      },
      order: {
        createdAt: 'DESC',
      },
    })
    return this.guildDataRepo.findOneBy({ uid, guid })
  }

  findOneByGuid(guid: string) {
    return this.guildDataRepo.findOneBy({ guid })
  }

  findOneByUid(uid: string) {
    return this.guildDataRepo.findOneBy({ uid })
  }

  update(id: string, updateGuildDataInput: UpdateGuildDataInput) {
    return this.guildDataRepo.update(new ObjectId(id), updateGuildDataInput)
  }

  remove(id: string) {
    return this.guildDataRepo.update(new ObjectId(id), { deletedAt: new Date() })
  }

  restore(id: string) {
    return this.guildDataRepo.update(new ObjectId(id), { deletedAt: null })
  }
}
