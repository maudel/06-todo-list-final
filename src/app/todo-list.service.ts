import { Injectable } from '@angular/core';
import {Elemento} from './elemento';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoList = [
    new Elemento('Inslala NodeJS', 'nodejs'),
    new Elemento('Instala Angular CLI', 'angular cli'),
    new Elemento('crear new app', 'crear nueva app en angular cli'),
    new Elemento('correr app', 'correr app'),
    new Elemento('desarrolladro app', 'desarrollar'),
    new Elemento('deployar app', 'deployar app'),
];
  constructor() { }
  addItem(item): void {
    this.todoList.push(item);
  }
  getTodoList() {
    return this.todoList;
  }
  
}
