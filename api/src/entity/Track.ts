import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @CreateDateColumn()
    created_at: string
}