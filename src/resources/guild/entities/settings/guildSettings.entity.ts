import { Field, ObjectType } from '@nestjs/graphql'
import { Prop } from '@nestjs/mongoose'
import { LevelSettings } from './levelSettings.entity'

@ObjectType()
export class Settings {
  @Field({ defaultValue: '!' })
  @Prop({ default: '!' })
  prefix: string

  @Field({ defaultValue: false })
  @Prop({ default: false })
  levelingEnabled: boolean

  @Field(() => LevelSettings, { defaultValue: {} })
  @Prop()
  levelSettings: LevelSettings
}
