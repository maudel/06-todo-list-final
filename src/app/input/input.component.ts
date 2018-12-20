import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = '';

  constructor() { }

  ngOnInit() {
  }
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  AddNewTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
