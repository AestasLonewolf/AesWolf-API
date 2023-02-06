import { Test, TestingModule } from '@nestjs/testing'
import { GuildDataResolver } from './guild-data.resolver'
import { GuildDataService } from './guild-data.service'

describe('GuildDataResolver', () => {
  let resolver: GuildDataResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuildDataResolver, GuildDataService],
    }).compile()

    resolver = module.get<GuildDataResolver>(GuildDataResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
