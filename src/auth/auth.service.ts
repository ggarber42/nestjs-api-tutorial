import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'I am signed up' };
  }

  signin() {
    return 'I am sign in';
  }
}
