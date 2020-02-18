import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
				"entities": [ __dirname + "/entities/*.{ts,js}"],
				"synchronize": true
			}),
		PessoasModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
