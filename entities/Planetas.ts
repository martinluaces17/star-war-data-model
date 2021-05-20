import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm"
import { Favoritos } from "./Favoritos"

@Entity()
export class Planetas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    nombre: string

    @Column()
    diametro: string;

    @Column()
    periodo_de_rotacion: string;

    @Column()
    gravedad: string;

    @Column()
    poblacion: string;

    @Column()
    terreno: string;

    @Column()
    img_url: string;

    // @ManyToOne(() => User, user => user.planetas)
    // user: User;
}

