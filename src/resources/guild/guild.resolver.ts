import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql'
import { GuildService } from './guild.service'
import { Guild } from './entities/guild.entity'
import { CreateGuildInput } from './dto/create-guild.input'
import { UpdateGuildInput } from './dto/update-guild.input'
import { GuildData } from './entities/guildData.entity'
import { GuildDataService } from './guildData.service'
import { User } from '../user/entities/user.entity'

@Resolver(() => GuildData)
export class GuildDataResolver {
  constructor(private readonly guildService: GuildService) {}

  @ResolveField()
  guild(@Parent() gData: GuildData): Promise<Guild> {
    return this.guildService.findOneByGuid(gData.guid)
  }
}

@Resolver(() => Guild)
export class GuildResolver {
  constructor(
    private readonly guildService: GuildService,
    private readonly gDataService: GuildDataService,
  ) {}

  @Mutation(() => Guild)
  createGuild(@Args('createGuildInput') createGuildInput: CreateGuildInput) {
    return this.guildService.create(createGuildInput)
  }

  @Query(() => [Guild], { name: 'guilds' })
  findAll() {
    return this.guildService.findAll()
  }

  @Query(() => Guild, { name: 'guild' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.guildService.findOne(id)
  }

  @Query(() => [User], { name: 'topUsersByGuilds' })
  findTopUsersByGuild(@Args('guid', { type: () => String }) id: string) {
    return this.gDataService.findTopUsersByGuid(id)
  }

  @Mutation(() => Guild)
  updateGuild(
    @Args('id', { type: () => String }) id: string,
    @Args('updateGuildInput') updateGuildInput: UpdateGuildInput,
  ) {
    return this.guildService.update(id, updateGuildInput)
  }

  @Mutation(() => Guild)
  removeGuild(@Args('id', { type: () => String }) id: string) {
    return this.guildService.remove(id)
  }
}
