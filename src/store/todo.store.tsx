import { makeAutoObservable } from 'mobx';
import { ITodo } from '../models/todo.model';


export class TodoStore {
  todos: ITodo[] = [];
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setTodo({ todos, isLoading }: { todos: ITodo[]; isLoading: boolean }) {
    this.todos = todos;
    this.isLoading = isLoading;
  }
}
