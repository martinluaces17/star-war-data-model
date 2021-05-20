import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, OneToMany
  } from 'typeorm';
  
import {Favoritos} from "./Favoritos"

  // import {Planet} from "./Planet"
  @Entity()
  export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    first_name: string;
  
    @Column()
    last_name: string;
  
    @Column({unique: true})
    email: string;
  
    @Column({unique: true})
    password: string;
  
    // @OneToMany(()=>Planetas, planetas => planetas.user)
    // planetas: Planetas[];

    // @OneToMany(()=>Personajes, personajes => personajes.user)
    // personajes: Personajes[];
    // @ManyToMany(() => Planet)
    // @JoinTable()
    // planets: Planet[];
    
  }