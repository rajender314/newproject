import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  @Input() public simpleInput: string;
  // @Input('simpleInput') public anotherName: string;

  // child to parent

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
     let change = changes[propName];
     let current = change.currentValue;
     let previous = change.previousValue;

      console.log(current, previous)
    }
  }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hey codeEvolution');
  }

}
