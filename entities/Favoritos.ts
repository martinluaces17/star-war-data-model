import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, BaseEntity, JoinTable } from 'typeorm';

import { Personajes } from "./Personajes"
import { Planetas } from "./Planetas"
import { User } from "./User"

@Entity()
export class Favoritos extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    usuerId: User;

    @OneToOne(() => Personajes)
    @JoinColumn()
    personaje: Personajes;

    @OneToOne(() => Planetas)
    @JoinColumn()
    planeta: Planetas

}