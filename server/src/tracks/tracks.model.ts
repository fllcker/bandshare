import {Column, DataType, Model, Table} from "sequelize-typescript";

interface TracksCreationAttrs {
    author: string;
    name: string;
    image: string;
}

@Table({tableName: 'tracks'})
export class Tracks extends Model<Tracks, TracksCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    author: string;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: true})
    image: string;
}