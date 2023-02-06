import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'
import { GuildData } from 'src/resources/guild-data/entities/guild-data.entity'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm'

export enum UserRole {
  'BANNED' = 0,
  'USER' = 1,
  'DEVELOPER' = 2,
  'OWNER' = 3,
  'CLIENT' = 4,
}
registerEnumType(UserRole, { name: 'UseRole' })

@Entity()
@ObjectType()
export class User {
  @Field(() => ID, { description: 'MongoDB ObjectID' })
  @ObjectIdColumn()
  id: ObjectId

  @Field({ description: 'Discord User ID' })
  @Column({ unique: true })
  uid: string

  @Field(() => UserRole, {
    nullable: true,
    defaultValue: UserRole.USER,
    description:
      'User Role for the Bot, default is USER, 0 is BANNED, 1 is USER, 2 is DEVELOPER, 3 is OWNER, 4 is CLIENT',
  })
  @Column()
  role: UserRole

  @Field(() => [GuildData], { defaultValue: [] })
  guilds: GuildData[]

  @Field({ nullable: true })
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date
}
