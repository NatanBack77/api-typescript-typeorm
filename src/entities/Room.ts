import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Video";

@Entity('rooms')
export class Room {
@PrimaryGeneratedColumn()
 id: number

 @Column({type: "text"})
 name: string

 @OneToMany(()=> Video , Video=> Video.room)
 videos: Video[]
}