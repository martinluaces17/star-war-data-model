import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm"
import { Favoritos } from "./Favoritos"

@Entity()
export class Personajes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    nombre: string

    @Column()
    altura: string;

    @Column()
    peso: string;

    @Column()
    color_de_piel: string;

    @Column()
    fecha_nacimiento: string;

    @Column()
    descripcion: string;

    @Column()
    img_url: string;

    // @ManyToOne(() => User, user => user.personajes)
    // user: User;
}
