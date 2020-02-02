import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from '../entities/Pessoa';
import { PessoasController } from './pessoas.controller';
import { PessoaService } from './shared/pessoa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  controllers: [PessoasController],
  providers: [PessoaService],
  exports: [TypeOrmModule]
})
export class PessoasModule {}
