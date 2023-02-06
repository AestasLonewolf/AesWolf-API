import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateGuildDataInput {
  @Field(() => String)
  guid: string
}
