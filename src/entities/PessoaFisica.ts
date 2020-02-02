import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from "typeorm";
import { Pessoa } from "./Pessoa";

@Entity()
export class PessoaFisica {

    @PrimaryGeneratedColumn()
    id: number;

    @Index("UK_PF_1", { unique: true })
    @Column()
    nr_cpf: number;
    
    @OneToOne(() => Pessoa, pessoa => pessoa.pessoaFisica, {
        nullable: false,
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    pessoa: Pessoa;  
}