import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthentificationService {
  
  constructor(private prismaService: PrismaService) {}

  signIn(): string {
    return 'sign in';
  }

  signUp(payload): string {
    return 'sign in';
  }

  getAllUser(): any[] {
    return this.prismaService.getAllUser();
  }
}
