import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './resources/user/user.module'
import { GuildModule } from './resources/guild/guild.module'
import { BootstrapModule } from './bootstrap/bootstrap.module'
import { UtilModule } from './utils/util.module'
import { HttpModule } from '@nestjs/axios/dist/http.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [BootstrapModule, AuthModule, UtilModule, UserModule, GuildModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
