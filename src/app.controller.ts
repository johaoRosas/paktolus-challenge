import { Controller, Get, Post, Req,Request, UseGuards } from '@nestjs/common';
import { AppService } from './google/app.service';
import { AuthGuard } from '@nestjs/passport'; 
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller('google')
export class AppController {
  constructor(private readonly appService: AppService, ) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }

 

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }


}
