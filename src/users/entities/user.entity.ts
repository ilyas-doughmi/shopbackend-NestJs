import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Roles{
    Admin = 'Admin',
    Client = 'Client'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Roles,
        default: Roles.Client,
    })
    role: Roles;
}

