import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'
import { GuildData } from 'src/resources/guild/entities/guildData.entity'
import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm'

export enum UserRole {
  'user' = 'user',
  'developer' = 'developer',
  'owner' = 'owner',
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
    defaultValue: UserRole.user,
    description: 'User Role for the Bot',
  })
  @Column()
  role: UserRole

  @Field(() => [GuildData], { defaultValue: [] })
  @Column()
  guilds: GuildData[]

  @Field({ nullable: true })
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date
}
