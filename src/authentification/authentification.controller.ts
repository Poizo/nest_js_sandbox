import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthentificationService } from './authentification.service';

@ApiTags('Auth')
@Controller()
export class AuthentificationController {
  constructor(
    private readonly authentificationService: AuthentificationService,
  ) {}

  @Post('/signin')
  signIn(): string {
    return this.authentificationService.signIn();
  }

  @Post('/signup')
  @ApiBody({})
  signUp(@Body() body: {poney: string}): string {
    const payload = body;
    console.log(payload);
    
    return this.authentificationService.signUp(payload);
  }
}
