import { Body, Controller, Post } from '@nestjs/common';
import { loginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) {}
    @Post('/login')
    signIn(@Body() loginAuthDto:loginAuthDto){
        return this.AuthService.signIn(loginAuthDto);
    }



}
