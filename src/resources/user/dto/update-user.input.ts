import { CreateUserInput } from './create-user.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  uid: string
}
