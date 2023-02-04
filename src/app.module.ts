import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './resources/user/user.module'
import { GuildModule } from './resources/guild/guild.module'
import { BootstrapModule } from './bootstrap/bootstrap.module'
import { UtilModule } from './utils/util.module'

@Module({
  imports: [BootstrapModule, UtilModule, UserModule, GuildModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
