import { Field, ObjectType } from '@nestjs/graphql'
import { Column } from 'typeorm'

@ObjectType({ description: "Settings for the Guild's leveling system" })
export class LevelSettings {
  @Field({ defaultValue: 20, description: 'Minimum amount of experience someone can gain' })
  @Column()
  minExp: number

  @Field({ defaultValue: 30, description: 'Maximum amount of experience someone can gain' })
  @Column()
  maxExp: number

  @Field({
    defaultValue: 0.12,
    description: 'Decides how much EXP is worth, the higher the value = higher User level from EXP',
  })
  @Column()
  constant: number

  @Field({ defaultValue: 1, description: 'Multiplier for EXP gain' })
  @Column()
  multiplier: number

  @Field({ defaultValue: 30, description: 'Cooldown for EXP gain in seconds' })
  @Column()
  expCooldown: number

  @Field({
    defaultValue: '{user} leveled up to {role}!',
  })
  @Column()
  levelUpMessage: string

  @Field(() => [LevelRole], { defaultValue: [] })
  @Column()
  levelRoles: LevelRole[]
}

@ObjectType()
class LevelRole {
  @Field()
  @Column()
  level: number

  @Field()
  @Column()
  role: string
}
