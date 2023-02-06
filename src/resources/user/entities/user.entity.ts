import { ObjectType, Field, registerEnumType } from '@nestjs/graphql'
import { HydratedDocument } from 'mongoose'
import { Prop, Schema } from '@nestjs/mongoose'
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

@Schema({ timestamps: true })
@ObjectType()
export class User {
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

  @Prop()
  @Field(() => [GuildData], { defaultValue: [] })
  guilds: GuildData[]

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

export type UserDocument = HydratedDocument<User>
export const UserSchema = SchemaFactory.createForClass(User)
