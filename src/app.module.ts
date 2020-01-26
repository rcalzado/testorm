import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { Photo } from './entities/Photo';

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
				"entities": [User, Photo]
			}
		),
		UsersModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
