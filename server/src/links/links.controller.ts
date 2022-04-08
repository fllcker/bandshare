import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {CreateLinksDto} from "./dto/create-links.dto";
import {LinksService} from "./links.service";
import {JwtGuard} from "../users/jwt.guard";
import {UsersDecorator} from "../users/users.decorator";

@Controller('links')
export class LinksController {
    constructor(private linksService: LinksService) {}

    @Post()
    @UseGuards(JwtGuard)
    create(@Body() createLinksDto: CreateLinksDto, @UsersDecorator('username') username) {
        let payload = {...createLinksDto, author: username}
        return this.linksService.create(payload)
    }

    @Get('/')
    getAll() {
        return this.linksService.getAll()
    }

    @Get('/id/:id')
    getLinksById(@Param('id') id) {
        return this.linksService.getAllById(parseInt(id))
    }

    @Get('/author/:author')
    getLinksByAuthor(@Param('author') author) {
        return this.linksService.getAllByUserName(author)
    }
}
