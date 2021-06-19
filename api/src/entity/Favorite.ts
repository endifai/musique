import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Track } from "./Track";
import { User } from "./User";

@Entity()
export class Favorite {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(type => User, user => user.favorites) user: User

    @ManyToOne(type => Track, track => track.isFavorite) track: Track

    @CreateDateColumn()
    created_at: string
}   