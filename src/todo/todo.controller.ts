import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {

    }
    @Get()
    findAll()
    {
        try {
            return this.todoService.findAll();
        }
        catch (error) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDto)
    {
        const result = this.todoService.create(createTodoDto);
        return result;
    }

    @Get(":id")
    findOne(
        @Param("id", new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST})) id: number
    )
    {
        return `Your  todo item id is ${id}`;;
    }

    @Put(":id")
    update(
        @Param("id", new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST})) id: number
    )
    {
        return "Update a todo item";
    }
    @Delete(":id")
    delete()
    {
        return "Delete a todo item";
    }
}
