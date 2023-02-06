import { CreateGuildInput } from './dto/create-guild.input'
import { UpdateGuildInput } from './dto/update-guild.input'
import { Guild, GuildDocument } from './entities/guild.entity'
import { Injectable } from '@nestjs/common'
import { ObjectId } from 'mongodb'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class GuildService {
  constructor(
    @InjectModel(Guild.name)
    private readonly guildRepo: Model<GuildDocument>,
  ) {}

  create(createGuildInput: CreateGuildInput) {
    const newGuild = new this.guildRepo(createGuildInput)
    return newGuild.save()
  }

  findAll(): Promise<Guild[]> {
    return this.guildRepo.find().exec()
  }

  findOne(id: string): Promise<Guild> {
    return this.guildRepo.findOne(new ObjectId(id)).exec()
  }

  findOneByGuid(guid: string): Promise<Guild> {
    return this.guildRepo.findOne({ guid }).exec()
  }

  async update(id: string, updateGuildInput: UpdateGuildInput): Promise<Guild> {
    await this.guildRepo.findOneAndUpdate(new ObjectId(id), updateGuildInput).exec()
    return this.findOne(id)
  }

  remove(id: string) {
    return `This action removes a #${id} guild`
  }
}
