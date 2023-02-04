import { CreateGuildInput } from './dto/create-guild.input'
import { UpdateGuildInput } from './dto/update-guild.input'
import { Guild } from './entities/guild.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { ObjectId } from 'mongodb'

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

  findOne(id: string) {
    return this.guildRepo.findOne(new ObjectId(id))
  }

  findOneByGuid(guid: string) {
    return this.guildRepo.findOneBy({ guid })
  }

  async update(id: string, updateGuildInput: UpdateGuildInput) {
    await this.guildRepo.update(new ObjectId(id), updateGuildInput)
    return this.findOne(id)
  }

  remove(id: string) {
    return `This action removes a #${id} guild`
  }
}
