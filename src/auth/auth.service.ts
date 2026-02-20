import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { loginAuthDto } from './dto/login-auth.dto';
import * as bycrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'; 

@Injectable()

export class AuthService {
    constructor(private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ){}

    async signIn(loginAuthDto : loginAuthDto){
        const user = await this.usersService.findOneByEmail(loginAuthDto.email);
        if(!user){
            throw new UnauthorizedException('Invalid Credentials');
        }
        const isMatch = await bycrypt.compare(loginAuthDto.password,user.password);
        
        if(!isMatch){
            throw new UnauthorizedException('Invalid Credentials');
        }

        const payload = {sub: user.id,email: user.email, role:user.role};
        
        return {
            'access_token': await this.jwtService.signAsync(payload)
        }
    }
}
