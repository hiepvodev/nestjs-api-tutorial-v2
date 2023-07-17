import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signup() {
    return { mess: 'I am signup' };
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signin() {
    return { mess: 'I am signin' };
  }
}
