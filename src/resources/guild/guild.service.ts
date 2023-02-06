import { CreateGuildInput } from './dto/create-guild.input'
import { UpdateGuildInput } from './dto/update-guild.input'
import { Guild } from './entities/guild.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'

@Injectable()
export class GuildService {
  constructor(
    @InjectRepository(Guild)
    private readonly guildRepo: Repository<Guild>,
  ) {}

  create(createGuildInput: CreateGuildInput) {
    return this.guildRepo.save(createGuildInput)
  }

  findAll() {
    return this.guildRepo.find()
  }

  findOneByGuid(guid: string) {
    return this.guildRepo.findOneBy({ guid })
  }

  async update(guid: string, updateGuildInput: UpdateGuildInput) {
    await this.guildRepo.update({ guid }, updateGuildInput)
    return this.findOneByGuid(guid)
  }

  remove(guid: string) {
    return this.guildRepo.update({ guid }, { deletedAt: new Date() })
  }

  restore(guid: string) {
    return this.guildRepo.update({ guid }, { deletedAt: null })
  }
}
