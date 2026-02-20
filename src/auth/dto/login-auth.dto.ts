import { IsEmail, IsNotEmpty } from "class-validator";

export class loginAuthDto{
    @IsEmail()
    @IsNotEmpty()
    email:string;
    @IsNotEmpty()
    password:string;
}