import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  //outputs: ['changedValue']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: any = 0;

  @Output() changedValue = new EventEmitter();

  increment() {
    this.value++;
    this.changedValue.emit({newValue: this.value});
  }

  decrement() {
    this.value--;
    this.changedValue.emit({newValue: this.value});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
