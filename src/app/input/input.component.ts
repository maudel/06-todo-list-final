import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  @Input() title = '';
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  constructor() {

   }

  ngOnInit() {
  }
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  AddNewTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
  cancelEdit(inputElem) {
    inputElem.value =  inputElem.value;
    this.cancel.emit();
  }
}
