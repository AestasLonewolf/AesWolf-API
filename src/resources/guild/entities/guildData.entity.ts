import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ObjectIdColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm'
import { ObjectType, Field, ID, InputType, ResolveField } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'
import { Guild } from './guild.entity'

@ObjectType({ description: "User's data that's specific to a Guild " })
export class GuildData {
  @Field(() => Guild, { nullable: true })
  guild: Guild

  @Column({ unique: true })
  guid: string

  @Index({ fulltext: true })
  @Field({ description: 'EXP amount in Guild', defaultValue: 0 })
  @Column()
  exp: number
}
