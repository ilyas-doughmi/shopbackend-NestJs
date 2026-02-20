import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { loginAuthDto } from './dto/login-auth.dto';
import * as bycrypt from 'bcrypt';

@Injectable()

export class AuthService {
    constructor(private readonly usersService: UsersService){}

    async signIn(loginAuthDto : loginAuthDto){
        const user = await this.usersService.findOneByEmail(loginAuthDto.email);
        if(!user){
            throw new UnauthorizedException('Invalid Credentials');
        }
        const isMatch = await bycrypt.compare(loginAuthDto.password,user.password);
        
        if(!isMatch){
            throw new UnauthorizedException('Invalid Credentials');
        }
        
        const {password,...result} = user;

        return result;
    }
}
