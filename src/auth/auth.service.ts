import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signup() {
    return { mess: 'I am signup' };
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signin() {
    return { mess: 'I am signin' };
  }
}
