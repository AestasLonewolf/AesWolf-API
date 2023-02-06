import { Field, ObjectType } from '@nestjs/graphql'
import { Prop } from '@nestjs/mongoose'

@ObjectType({ description: "Settings for the Guild's leveling system" })
export class LevelSettings {
  @Field({ defaultValue: 20, description: 'Minimum amount of experience someone can gain' })
  @Prop({ default: 20 })
  minExp: number

  @Field({ defaultValue: 30, description: 'Maximum amount of experience someone can gain' })
  @Prop({ default: 30 })
  maxExp: number

  @Field({
    defaultValue: 0.12,
    description: 'Decides how much EXP is worth, the higher the value = higher User level from EXP',
  })
  @Prop({ default: 0.12 })
  constant: number

  @Field({ defaultValue: 1, description: 'Multiplier for EXP gain' })
  @Prop({ default: 1 })
  multiplier: number

  @Field({ defaultValue: 30, description: 'Cooldown for EXP gain in seconds' })
  @Prop({ default: 30 })
  expCooldown: number

  @Field({
    defaultValue: '{user} leveled up to {role}!',
  })
  @Prop({ default: '{user} leveled up to {role}!' })
  levelUpMessage: string

  @Field(() => [LevelRole], { defaultValue: [] })
  @Prop()
  levelRoles: LevelRole[]
}

@ObjectType()
class LevelRole {
  @Field()
  @Prop()
  level: number

  @Field()
  @Prop()
  role: string
}
