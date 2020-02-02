import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { Pessoa } from '../entities/Pessoa';
import { PessoaService } from './shared/pessoa.service';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('pessoa')
export class PessoasController {

    constructor(
        private pessoaService: PessoaService
    ) { }

    @Get()
    async getAll() : Promise<Pessoa[]> {
        return this.pessoaService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id : number) : Promise<Pessoa> {
        return this.pessoaService.getById(id);
    }

    @Post()
    async insert(@Body() pessoa : Pessoa) : Promise<Pessoa> {
        return this.pessoaService.insert(pessoa);
    }
    
    @Put(':id')
    async update(@Param('id') id : number, @Body() pessoa : Pessoa) : Promise<UpdateResult> {
        return this.pessoaService.update(id, pessoa);
    }

    @Delete(':id')
    async delete(@Param('id') id : number) : Promise<DeleteResult> {
        return this.pessoaService.delete(id);
    }

}
