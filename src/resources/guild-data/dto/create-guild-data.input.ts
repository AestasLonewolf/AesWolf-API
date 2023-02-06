import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateGuildDataInput {
  @Field(() => String, { description: 'User ID' })
  uid: string

  @Field(() => String, { description: 'Guild ID' })
  guid: string
}
