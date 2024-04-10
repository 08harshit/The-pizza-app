import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto, UserSignupDto } from './dto/auth.dto';
import { User } from 'src/core/models/user';

@Injectable()
export class AuthService {
  signUp(creds: UserSignupDto) {
    return User.create(creds);
  }

  async login(creds: LoginDto) {
    const user = await User.findOne({
      where: {
        email: creds.email,
        password: creds.password,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
