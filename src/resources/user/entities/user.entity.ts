import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql'
import * as mongoose from 'mongoose'
import { Prop, Schema } from '@nestjs/mongoose'
import { ObjectId } from 'mongodb'
import { GuildData } from 'src/resources/guild/entities/guildData.entity'
import { SchemaFactory } from '@nestjs/mongoose/dist'

export enum UserRole {
  'BANNED' = 0,
  'USER' = 1,
  'DEVELOPER' = 2,
  'OWNER' = 3,
  'CLIENT' = 4,
}
registerEnumType(UserRole, { name: 'UseRole' })

@Schema()
@ObjectType()
export class User {
  @Field(() => ID, { description: 'MongoDB ObjectID' })
  @Prop({ type: () => ObjectId })
  id: ObjectId

  @Prop({ unique: true })
  @Field({ description: 'Discord User ID' })
  uid: string

  @Prop()
  @Field(() => UserRole, {
    nullable: true,
    defaultValue: UserRole.USER,
    description:
      'User Role for the Bot, default is USER, 0 is BANNED, 1 is USER, 2 is DEVELOPER, 3 is OWNER, 4 is CLIENT',
  })
  role: UserRole

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GuildData' }] })
  @Field(() => [GuildData], { defaultValue: [] })
  guilds: GuildData[]

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
