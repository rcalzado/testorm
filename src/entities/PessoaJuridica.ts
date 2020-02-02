import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from "typeorm";
import { Pessoa } from "./Pessoa";

@Entity()
export class PessoaJuridica {

    @PrimaryGeneratedColumn()
    id: number;

    @Index("UK_PJ_1", { unique: true })
    @Column()
    nr_cnpj: number;
    
    @OneToOne(() => Pessoa, pessoa => pessoa.pessoaJuridica, {
        nullable: false,
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    pessoa: Pessoa;  
}
