import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateGuildInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  guid: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string
}
