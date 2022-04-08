import { Module } from '@nestjs/common';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Links} from "./links.model";
import {User} from "../users/users.model";
import {JwtModule} from "@nestjs/jwt";

@Module({
    controllers: [LinksController],
    providers: [LinksService],
    imports: [
        SequelizeModule.forFeature([Links, User]),
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: '12h' },
        })
    ]
})
export class LinksModule {}
