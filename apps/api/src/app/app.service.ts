import { Injectable } from '@nestjs/common';
import { Todo } from '@myorg/data';

@Injectable()
export class AppService {
  todos: Array<Todo> = new Array({ title: 'Todo 1' }, { title: 'Todo 2' });

  getData(): Array<Todo> {
    return this.todos;
  }

  addTodo() {
    this.todos = [...this.todos, { title: 'Todo 3' }];
  }
}
