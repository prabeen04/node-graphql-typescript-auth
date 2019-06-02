import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert } from "typeorm";
import uuid = require("uuid");

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("varchar", { length: 255, })
    firstName: string;

    @Column("varchar", { length: 255 })
    middleName: string;

    @Column("varchar", { length: 255 })
    lastName: string;

    @Column("varchar", { length: 255 })
    email: string;

    @Column("text")
    password: string;

    @Column()
    dob: number;
}
