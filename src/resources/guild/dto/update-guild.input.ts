import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateGuildInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  guid: string
}
