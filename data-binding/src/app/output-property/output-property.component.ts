import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  //outputs: ['changedValue']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: any = 0;

  @Output() changedValue = new EventEmitter();

  @ViewChild('inputField', {static: true})  inputValueField!: ElementRef;

  increment() {
    this.inputValueField.nativeElement.value++;
    this.changedValue.emit({newValue: this.value});
  }

  decrement() {
    this.inputValueField.nativeElement.value--;
    this.changedValue.emit({newValue: this.value});
  }

  constructor() { }

  ngOnInit(): void {
  }
}
