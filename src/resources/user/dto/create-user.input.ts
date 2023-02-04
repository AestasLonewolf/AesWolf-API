import { InputType, Int, Field } from '@nestjs/graphql'
import {
  ArrayUnique,
  arrayUnique,
  IsByteLength,
  IsNumberString,
  IsUUID,
  Length,
} from 'class-validator'
import { CreateGuildDataInput } from 'src/resources/guild/dto/create-guildData.input'
import { GuildData } from 'src/resources/guild/entities/guildData.entity'

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsNumberString()
  uid: string

  @Field(() => [CreateGuildDataInput])
  @ArrayUnique((item: CreateGuildDataInput) => item.guid)
  guildData: GuildData[]
}
