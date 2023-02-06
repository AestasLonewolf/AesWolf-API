import { InputType, Field } from '@nestjs/graphql'
import { IsNumberString } from 'class-validator'

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsNumberString()
  uid: string
}
