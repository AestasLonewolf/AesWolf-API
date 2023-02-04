import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { ObjectType, Field, ID, InputType } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'
import { Settings } from './settings/guildSettings.entity'

@Entity()
@ObjectType()
export class Guild {
  @Field(() => ID, { description: 'MongoDB ObjectID' })
  @ObjectIdColumn()
  id: ObjectId

  @Field({ description: 'Discord Guild ID' })
  @Column({ unique: true }) // TODO: add validation
  guid: string

  @Field()
  @Column()
  name: string

  @Field(() => Settings)
  @Column(() => Settings)
  settings: Settings

  @Field({ nullable: true })
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date
}
