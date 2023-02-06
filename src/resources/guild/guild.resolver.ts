import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { GuildService } from './guild.service'
import { Guild } from './entities/guild.entity'
import { CreateGuildInput } from './dto/create-guild.input'
import { UpdateGuildInput } from './dto/update-guild.input'

@Resolver(() => Guild)
export class GuildResolver {
  constructor(private readonly guildService: GuildService) {}

  //////* QUERIES ///////

  @Query(() => [Guild], { name: 'guilds' })
  findAll() {
    return this.guildService.findAll()
  }

  @Query(() => Guild, { name: 'guild' })
  findByGuid(@Args('guid', { type: () => String }) guid: string) {
    return this.guildService.findOneByGuid(guid)
  }

  //////* MUTATIONS ///////

  @Mutation(() => Guild)
  createGuild(@Args('createGuildInput') createGuildInput: CreateGuildInput) {
    return this.guildService.create(createGuildInput)
  }

  @Mutation(() => Guild)
  updateGuild(
    @Args('guid', { type: () => String }) guid: string,
    @Args('updateGuildInput') updateGuildInput: UpdateGuildInput,
  ) {
    return this.guildService.update(guid, updateGuildInput)
  }

  @Mutation(() => Guild)
  removeGuild(@Args('guid', { type: () => String }) guid: string) {
    return this.guildService.remove(guid)
  }

  @Mutation(() => Guild)
  restoreGuild(@Args('guid', { type: () => String }) guid: string) {
    return this.guildService.restore(guid)
  }
}
