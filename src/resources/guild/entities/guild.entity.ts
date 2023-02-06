import { ObjectType, Field } from '@nestjs/graphql'
import { Settings } from './settings/guildSettings.entity'
import { Prop, Schema } from '@nestjs/mongoose'
import { SchemaFactory } from '@nestjs/mongoose/dist'
import { HydratedDocument } from 'mongoose'

@Schema({ timestamps: true })
@ObjectType()
export class Guild {
  @Field({ description: 'Discord Guild ID' })
  @Prop({ unique: true })
  guid: string

  @Field()
  @Prop()
  name: string

  @Field(() => Settings)
  @Prop()
  settings: Settings

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date

  @Prop()
  @Field(() => Date, { description: 'Deleted At' })
  deletedAt?: Date
}

export type GuildDocument = HydratedDocument<Guild>
export const GuildSchema = SchemaFactory.createForClass(Guild)
