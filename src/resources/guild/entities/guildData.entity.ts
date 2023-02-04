import { Column, CreateDateColumn, Entity, ObjectIdColumn, Unique, UpdateDateColumn } from 'typeorm'
import { ObjectType, Field, ID, InputType, ResolveField } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'
import { Guild } from './guild.entity'

@ObjectType()
export class GuildData {
  @Field(() => Guild, { nullable: true })
  guild: Guild

  @Column({ unique: true })
  guid: string

  @Field({ description: 'Discord Guild ID', defaultValue: 0 })
  @Column()
  exp: number
}
