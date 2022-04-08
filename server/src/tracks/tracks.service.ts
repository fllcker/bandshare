import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Tracks} from "./tracks.model";
import {CreateTrackDto} from "./dto/create-track.dto";

@Injectable()
export class TracksService {
    constructor(@InjectModel(Tracks) private tracksRepository: typeof Tracks) {}

    async create(createTrackDto: CreateTrackDto) {
        try {
            let track = this.tracksRepository.create(createTrackDto)
            return track
        } catch (e) {
            return e.message
        }
    }

    async getAllByAuthor(author: string) {
        return this.tracksRepository.findOne({where: {author}})
    }
}
