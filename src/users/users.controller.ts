import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { User } from '../entities/User';
import { UserService } from './shared/user.service';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('users')
export class UsersController {

    constructor(
        private userService: UserService
    ) { }

    @Get()
    async getAll() : Promise<User[]> {
        return this.userService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id : number) : Promise<User> {
        return this.userService.getById(id);
    }

    @Post()
    async save(@Body() user : User) : Promise<User> {
        return this.userService.create(user);
    }
    
    @Put(':id')
    async update(@Param('id') id : number, @Body() user : User) : Promise<UpdateResult> {
        return this.userService.save(id, user);
    }

    @Delete(':id')
    async delete(@Param('id') id : number) : Promise<DeleteResult> {
        return this.userService.delete(id);
    }

}
