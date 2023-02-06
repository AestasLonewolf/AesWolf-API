import { HttpService } from '@nestjs/axios/dist'
import { CanActivate, ExecutionContext, Injectable, mixin } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { firstValueFrom } from 'rxjs'
import { UserService } from 'src/resources/user/user.service'

@Injectable()
export class DiscordGuard implements CanActivate {
  constructor(readonly httpService: HttpService, private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    // get authorization header
    const authorization = ctx.getContext().req.headers.authorization
    console.log(authorization)

    try {
      // verify with discord at https://discord.com/api/v8/users/@me
      const response = firstValueFrom(
        this.httpService.get('https://discord.com/api/v8/users/@me', {
          headers: {
            Authorization: authorization,
          },
        }),
      )
      // get user from database
      const user = await this.userService.findOneByUid((await response).data.id)
      // set user in context
      ctx.getContext().req.user = user

      return (await response).status === 200
    } catch (e) {
      return false
    }
  }
}
