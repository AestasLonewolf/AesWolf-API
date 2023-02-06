import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { RolesGuard } from 'src/auth/guards/role.guard'
import { DiscordGuard } from 'src/auth/guards/discord.guard'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User, UserRole } from './entities/user.entity'
import { UserService } from './user.service'
import { GuildDataService } from '../guild-data/guild-data.service'
import { GuildData } from '../guild-data/entities/guild-data.entity'

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly guildDataService: GuildDataService,
  ) {}

  @ResolveField()
  guilds(@Parent() user: User): Promise<GuildData[]> {
    return this.guildDataService.findAllByUid(user.uid)
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput)
  }

  @UseGuards(DiscordGuard, RolesGuard(UserRole.DEVELOPER))
  @Query(() => [User], { name: 'allUsers' })
  findAll() {
    return this.userService.findAll()
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('uid', { type: () => String }) uid: string) {
    return this.userService.findOneByUid(uid)
  }

  @Mutation(() => User)
  updateUser(
    @Args('uid', { type: () => String }) uid: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update(uid, updateUserInput)
  }

  @Mutation(() => User)
  removeUser(@Args('uid', { type: () => String }) uid: string) {
    return this.userService.remove(uid)
  }

  @Mutation(() => User)
  restoreUser(@Args('uid', { type: () => String }) uid: string) {
    return this.userService.restore(uid)
  }
}
