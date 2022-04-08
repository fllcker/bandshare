import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateLinksDto} from "./dto/create-links.dto";
import {LinksService} from "./links.service";

@Controller('links')
export class LinksController {
    constructor(private linksService: LinksService) {}

    @Post()
    create(@Body() createLinksDto: CreateLinksDto) {
        return this.linksService.create(createLinksDto)
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
