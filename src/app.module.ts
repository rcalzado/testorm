import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/Pessoa';
import { PessoaFisica } from './entities/PessoaFisica';
import { PessoaJuridica } from './entities/PessoaJuridica';

@Module({
	imports: [
		TypeOrmModule.forRoot(
			{
				"type": "mysql",
				"host": "localhost",
				"port": 3306,
				"username": "dba",
				"password": "mysqladmin",
				"database": "testorm",
				"synchronize": true,
				"entities": [Pessoa, PessoaFisica, PessoaJuridica]
			}
		),
		PessoasModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
