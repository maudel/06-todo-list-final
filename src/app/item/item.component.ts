import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item">
      <input type="checkbox" (click)="completeItem()"/>

      <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
        {{ item.title }}
      </p>
      <button class="btn btn-red" (click)="removeItem()">Eliminar</button>
    </div>
  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Output() submit: EventEmitter<string> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  isComplete: boolean = false;

  constructor() {
  }
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
  ngOnInit() {

  }
  removeItem() {
    this.remove.emit(this.item);
  }
  completeItem() {
    this.isComplete = !this.isComplete;
  }
}
