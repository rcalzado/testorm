import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Pessoa } from '../../entities/Pessoa';

@Injectable()
export class PessoaService {
	constructor(
		@InjectRepository(Pessoa)
		private readonly pessoaRepository: Repository<Pessoa>,
	) { }

	getById(id: number): Promise<Pessoa> {
		return this.pessoaRepository.findOne(id);
	}

	getAll(): Promise<Pessoa[]> {
		return this.pessoaRepository.find();
	}

	insert(pessoa: Pessoa): Promise<Pessoa> {
		return this.pessoaRepository.save(pessoa);
	}

	update(id: number, pessoa: Pessoa): Promise<UpdateResult> {
		return this.pessoaRepository.update(id, pessoa);
	}

	delete(id: number): Promise<DeleteResult> {
		return this.pessoaRepository.delete(id);
	}
}