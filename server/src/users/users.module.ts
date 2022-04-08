import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {ConfigModule} from "@nestjs/config";
import {JwtModule} from "@nestjs/jwt";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forFeature([User]),
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: '12h' },
        })
    ]
})
export class UsersModule {}
