import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Favorite } from "./Favorite";
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
        default: 'avatars/default_avatar.png'
    })
    avatarUri: string

    @OneToMany(type => Track, track => track.user) tracks: Track[]

    @OneToMany(type => Favorite, favorite => favorite.user) favorites: Track[]
}