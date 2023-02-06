import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm'
import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Guild } from 'src/resources/guild/entities/guild.entity'
import { ObjectId } from 'mongodb'
import { User } from 'src/resources/user/entities/user.entity'

@Entity()
@ObjectType({ description: "User's data that's specific to a Guild " })
export class GuildData {
  @Field(() => ID, { description: 'MongoDB ObjectID' })
  @ObjectIdColumn()
  id: ObjectId

  @Field(() => Guild, { nullable: true })
  guild: Guild

  @Column()
  guid: string

  @Field(() => User, { nullable: true })
  user: User

  @Column()
  uid: string

  @Field({ description: 'EXP amount in Guild', defaultValue: 0 })
  @Column()
  exp: number

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
