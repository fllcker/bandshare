import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {User} from "./users/users.model";
import { LinksModule } from './links/links.module';
import {Links} from "./links/links.model";
import { TracksModule } from './tracks/tracks.module';
import {Tracks} from "./tracks/tracks.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASS,
            database: process.env.POSTGRES_DB,
            models: [User, Links, Tracks],
            autoLoadModels: true
        }),
        UsersModule,
        LinksModule,
        TracksModule,
    ]
})
export class AppModule {}
