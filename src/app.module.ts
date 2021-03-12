import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './google/app.service';
/* import { GoogleStrategy } from './google.strategy' */
import { GoogleModule} from './google/google.module';
import { AuthModule } from './auth/auth.module'; 

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, GoogleModule],
})
export class AppModule {}
