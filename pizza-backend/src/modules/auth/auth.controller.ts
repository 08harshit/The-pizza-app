import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, UserSignupDto } from './dto/auth.dto';
import { User } from 'src/core/models/user';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() creds: UserSignupDto) {
    return this.authService.signUp(creds);
  }

  @Post('login')
  login(@Body() creds: LoginDto) {
    return this.authService.login(creds);
  }
}
