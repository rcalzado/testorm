import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from '../../entities/User';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) { }

	getById(id: number): Promise<User> {
		return this.userRepository.findOne(id);
	}

	getAll(): Promise<User[]> {
		return this.userRepository.find();
	}

	save(id: number, user: User): Promise<UpdateResult> {
		return this.userRepository.update(id, user);
	}

	create(user: User): Promise<User> {
		return this.userRepository.save(user);
	}

	delete(id: number): Promise<DeleteResult> {
		return this.userRepository.delete(id);
	}
}