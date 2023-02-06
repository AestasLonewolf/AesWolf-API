import { ObjectType, Field } from '@nestjs/graphql'
import { Guild } from './guild.entity'
import { Prop } from '@nestjs/mongoose'

@ObjectType({ description: "User's data that's specific to a Guild " })
export class GuildData {
  @Field(() => Guild, { nullable: true })
  guild: Guild

  @Prop({ unique: true })
  guid: string

  @Field({ description: 'EXP amount in Guild', defaultValue: 0 })
  @Prop({ default: 0, required: false })
  exp: number
}
