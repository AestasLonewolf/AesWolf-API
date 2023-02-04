import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateGuildDataInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  guid: string
}
