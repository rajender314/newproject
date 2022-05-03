import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  inputValue: string = 'Raj';
  fromChild;
  constructor() { }


 
  ngOnInit() {
  }

  dataFromChild(event) {
    console.log(event);
    this.fromChild = event;
    }

}
