import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
    private readonly todos: CreateTodoDto[] = [];

    create(todo: CreateTodoDto){
        this.todos.push(todo);
        return this.todos;
    }

    findAll(): CreateTodoDto[]
    {
        return this.todos;
    }
}
