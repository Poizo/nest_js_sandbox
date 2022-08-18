import { AuthentificationController } from './authentification.controller';
import { AuthentificationService } from './authentification.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AuthentificationController],
  providers: [AuthentificationService],
})
export class AuthentificationModule {}
