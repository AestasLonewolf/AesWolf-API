import { CanActivate, ExecutionContext, Injectable, mixin } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { UserRole } from 'src/resources/user/entities/user.entity'
import { UserService } from 'src/resources/user/user.service'

export const RolesGuard = (requiredRole: UserRole) => {
  @Injectable()
  class RolesGuardMixin implements CanActivate {
    constructor(readonly userService: UserService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
      const ctx = GqlExecutionContext.create(context)
      const user = ctx.getContext().req.user
      const { role } = await this.userService.findOneByUid(user.uid)

      return requiredRole <= role
    }
  }

  const guard = mixin(RolesGuardMixin)
  return guard
}
