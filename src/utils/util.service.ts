import { Injectable } from '@nestjs/common'
import { PNGStream } from 'canvas'
import ImagePayload from 'src/interfaces/ImagePayload.interface'
import GenerateImage from './canvas/CanvasConstructor'

@Injectable()
export class UtilService {
  getHello(): string {
    return 'Hello World!'
  }

  async getLevelImage(payload: ImagePayload): Promise<PNGStream> {
    return await GenerateImage(payload)
  }
}
