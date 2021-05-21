import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
}