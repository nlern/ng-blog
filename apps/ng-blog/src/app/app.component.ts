import { Component, OnInit } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Array<Todo>;

  ngOnInit() {
    this.todos = new Array<Todo>(
      {
        title: 'Todo 1',
      },
      {
        title: 'Todo 2',
      }
    );
  }

  addTodo() {
    this.todos = [...this.todos, { title: 'Todo 3' }];
  }
}
