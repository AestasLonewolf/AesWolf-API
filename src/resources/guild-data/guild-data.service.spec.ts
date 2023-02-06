import { Test, TestingModule } from '@nestjs/testing'
import { GuildDataService } from './guild-data.service'

describe('GuildDataService', () => {
  let service: GuildDataService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuildDataService],
    }).compile()

    service = module.get<GuildDataService>(GuildDataService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
