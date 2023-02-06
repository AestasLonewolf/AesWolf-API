import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User, UserRole } from './entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { GuildService } from '../guild/guild.service'
import { UseGuards } from '@nestjs/common'
import { DiscordGuard } from 'src/auth/guards/discord.guard'
import { RolesGuard } from 'src/auth/guards/role.guard'

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly guildService: GuildService,
  ) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput)
  }

  @UseGuards(DiscordGuard, RolesGuard(UserRole.DEVELOPER))
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll()
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id)
  }

  @Mutation(() => User)
  updateUser(
    @Args('id', { type: () => String }) id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update(id, updateUserInput)
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.remove(id)
  }
}
