import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Links} from "./links.model";
import {CreateLinksDto} from "./dto/create-links.dto";

@Injectable()
export class LinksService {
    constructor(@InjectModel(Links) private linksRepository: typeof Links) {}

    async create(createLinksDto: CreateLinksDto) {
        try {
            let links = this.linksRepository.create(createLinksDto)
            return links
        } catch (e) {
            return e.message
        }
    }

    async getAll() {
        return this.linksRepository.findAll()
    }

    async getAllById(id: number) {
        return this.linksRepository.findAll({where: {trackId: id}})
    }

    async getAllByUserName(username: string) {
        return this.linksRepository.findAll({where: {author: username}})
    }
}
