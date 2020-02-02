import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";
import { Motorista } from "./Motorista";

@Entity()
export class Pessoa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 1 })
    tp_pessoa: string;

    @Column()
    nm_pessoa: string; 

    @OneToOne(() => PessoaFisica, pessoaFisica => pessoaFisica.pessoa, {
        cascade: true,
        eager: true
    })
    pessoaFisica: PessoaFisica;

    @OneToOne(() => PessoaJuridica, pessoaJuridica => pessoaJuridica.pessoa, {
        cascade: true,
        eager: true
    })
    pessoaJuridica: PessoaJuridica;    

    @OneToOne(() => Motorista, motorista => motorista.pessoa, {
        cascade: true,
        eager: true
    })
    motorista: Motorista;      

}