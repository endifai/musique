import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Favorite } from "./Favorite";
import { User } from "./User";

@Entity()
export class Track {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @ManyToOne(type => User, user => user.tracks) user: User

    @Column()
    duration: number

    @Column()
    fileUrl: string

    @OneToMany(type => Favorite, favorite => favorite.track) isFavorite: boolean

    @CreateDateColumn()
    created_at: string
}