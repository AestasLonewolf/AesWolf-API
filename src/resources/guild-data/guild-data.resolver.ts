import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql'
import { CreateGuildDataInput } from './dto/create-guild-data.input'
import { UpdateGuildDataInput } from './dto/update-guild-data.input'
import { GuildData } from './entities/guild-data.entity'
import { GuildDataService } from './guild-data.service'
import { Guild } from '../guild/entities/guild.entity'
import { GuildService } from '../guild/guild.service'
import { UserService } from '../user/user.service'
import { User } from '../user/entities/user.entity'

@Resolver(() => GuildData)
export class GuildDataResolver {
  constructor(
    private readonly guildDataService: GuildDataService,
    private readonly guildService: GuildService,
    private readonly userService: UserService,
  ) {}

  //////* RESOLVERS ///////

  @ResolveField()
  guild(@Parent() gData: GuildData): Promise<Guild> {
    return this.guildService.findOneByGuid(gData.guid)
  }

  @ResolveField()
  user(@Parent() gData: GuildData): Promise<User> {
    return this.userService.findOneByUid(gData.uid)
  }

  //////* QUERIES ///////

  @Query(() => [GuildData], { name: 'guilData' })
  findOne(
    @Args('uid', { type: () => String }) uid: string,
    @Args('guid', { type: () => String }) guid: string,
  ) {
    return this.guildDataService.findOne(uid, guid)
  }

  @Query(() => [GuildData], { name: 'guildDataByUid' })
  findAllByUid(@Args('uid', { type: () => String }) uid: string) {
    return this.guildDataService.findAllByUid(uid)
  }

  @Query(() => [GuildData], { name: 'guildDataByGuid' })
  findAllByGuid(@Args('guid', { type: () => String }) guid: string) {
    return this.guildDataService.findAllByGuid(guid)
  }

  //////* MUTATIONS ///////

  @Mutation(() => GuildData)
  createGuildData(@Args('createGuildDataInput') createGuildDataInput: CreateGuildDataInput) {
    return this.guildDataService.create(createGuildDataInput)
  }

  @Mutation(() => GuildData)
  updateGuildData(
    @Args('id', { type: () => String }) id: string,
    @Args('updateGuildDataInput') updateGuildDataInput: UpdateGuildDataInput,
  ) {
    return this.guildDataService.update(id, updateGuildDataInput)
  }

  @Mutation(() => GuildData)
  removeGuildData(@Args('id', { type: () => String }) id: string) {
    return this.guildDataService.remove(id)
  }

  @Mutation(() => GuildData)
  restoreGuildData(@Args('id', { type: () => String }) id: string) {
    return this.guildDataService.restore(id)
  }
}
