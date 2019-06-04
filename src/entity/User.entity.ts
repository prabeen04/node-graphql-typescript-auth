import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert } from "typeorm";
import uuid = require("uuid");
import * as bcrypt from 'bcryptjs';
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

    @Column("varchar", { length: 255, unique: true })
    email: string;

    @Column("text")
    password: string;

    @Column('varchar')
    dob: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }
}
