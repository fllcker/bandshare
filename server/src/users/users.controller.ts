import {Body, Controller, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {LoginUserDto} from "./dto/login-user.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/registration')
    registration(@Body() createUserDto: CreateUserDto) {
        return this.usersService.registration(createUserDto)
    }

    @Post('/login')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.usersService.login(loginUserDto)
    }
}
