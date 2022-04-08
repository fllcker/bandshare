import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {CreateTrackDto} from "./dto/create-track.dto";
import {UsersDecorator} from "../users/users.decorator";
import {TracksService} from "./tracks.service";
import {JwtGuard} from "../users/jwt.guard";

@Controller('tracks')
export class TracksController {
    constructor(private tracksService: TracksService) {}

    @Post()
    @UseGuards(JwtGuard)
    create(@Body() createTrackDto: CreateTrackDto, @UsersDecorator('username') author) {
        let payload = {...createTrackDto, author}
        return this.tracksService.create(payload)
    }

    @Get('/:author')
    getAllByAuthor(@Param('author') author) {
        return this.tracksService.getAllByAuthor(author)
    }
}
