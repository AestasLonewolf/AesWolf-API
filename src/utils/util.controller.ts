import { Body, Controller, Post, Res } from '@nestjs/common'
import ImagePayload from 'src/interfaces/ImagePayload.interface'
import { UtilService } from './util.service'

@Controller({ path: 'utility' })
export class UtilController {
  constructor(private readonly utilService: UtilService) {}

  @Post('image/level')
  async getHello(@Body() payload: ImagePayload, @Res() response) {
    console.log(payload)
    const image = await this.utilService.getLevelImage(payload)
    return image.pipe(response)
  }
}
