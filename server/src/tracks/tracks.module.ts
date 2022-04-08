import { Module } from '@nestjs/common';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Tracks} from "./tracks.model";
import {JwtModule} from "@nestjs/jwt";

@Module({
    controllers: [TracksController],
    providers: [TracksService],
    imports: [
        SequelizeModule.forFeature([Tracks]),
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: '12h' },
        })
    ]
})
export class TracksModule {}
