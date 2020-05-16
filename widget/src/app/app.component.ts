import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() title;
  @Input() phoneList;
  @Output() valueChange = new EventEmitter();
  counter = 10;
  constructor() {
    console.log('this.phoneList',this.phoneList);
  }
  valueChanged() { // You can give any function name
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
    console.log('Emitted by widget');
}
}
