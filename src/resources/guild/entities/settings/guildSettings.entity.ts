import { Field, ObjectType } from '@nestjs/graphql'
import { Column } from 'typeorm'
import { LevelSettings } from './levelSettings.entity'

@ObjectType()
export class Settings {
  @Field({ defaultValue: '!' })
  @Column()
  prefix: string

  @Field({ defaultValue: false })
  @Column()
  levelingEnabled: boolean

  @Field(() => LevelSettings, { defaultValue: {} })
  @Column(() => LevelSettings)
  levelSettings: LevelSettings
}
