import {Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn} from "typeorm";
import { Pessoa } from "./Pessoa";


@Entity({ synchronize: false })
export class Motorista {

    @PrimaryGeneratedColumn()
    id: number;

    @Index("UK_MOTORISTA_1", { unique: true })
    @Column()
    nr_cnh: number; 

    @OneToOne(() => Pessoa, pessoa => pessoa.motorista, {
        nullable: false,
        onUpdate: 'CASCADE', 
        onDelete: 'RESTRICT'
    })
    @JoinColumn()
    pessoa: Pessoa;      

}