import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtService} from "@nestjs/jwt";
import {LoginUserDto} from "./dto/login-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private jwtService: JwtService
    ) {}

    async registration(createUserDto: CreateUserDto) {
        try {
            const hashPass = await bcrypt.hash(createUserDto.password, 3);
            const payload1 = {...createUserDto, password: hashPass}
            const user = await this.userRepository.create(payload1)
            const payload2 = user['dataValues']
            return this.jwtService.sign(payload2);
        } catch (e) {
            return e.message
        }
    }

    async login(loginUserDto: LoginUserDto) {
        try {
            const user = await this.userRepository.findOne({where: {username: loginUserDto.username}})
            if(!user) throw new Error('Account not found!')
            const payload = user['dataValues']
            const isMatch = await bcrypt.compare(loginUserDto.password, payload.password);
            if (isMatch) {
                return this.jwtService.sign(payload);
            } else throw new Error('Wrong password!')
        } catch (e) {
            return e.message
        }
    }

    async getAll() {

    }

    async getUserById() {

    }

    async getUserByUserName() {

    }
}
