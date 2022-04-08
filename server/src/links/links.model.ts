import {Column, DataType, Model, Table} from "sequelize-typescript";

interface LinksCreationAttrs {
    author: string;
    trackId: number;
    platform: string;
    trackRef: string;
}

@Table({tableName: 'links'})
export class Links extends Model<Links, LinksCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    trackId: number;

    @Column({type: DataType.STRING, allowNull: false})
    author: string;

    @Column({type: DataType.STRING, allowNull: false})
    platform: string;

    @Column({type: DataType.STRING, allowNull: false})
    trackRef: string;
}