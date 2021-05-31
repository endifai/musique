import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Track } from "./Track";


@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    nickname: string;

    @Column()
    password: string;
    
    @Column({
        nullable: true
    })
    avatarUri: string

    @OneToMany(type => Track, track => track.user) tracks: Track[]
}