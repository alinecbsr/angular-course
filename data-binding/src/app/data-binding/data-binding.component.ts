import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  urlImage:string = 'https://i.picsum.photos/id/33/200/300.jpg?grayscale&hmac=OINt-C6qfyzfVlO7Stl4dcwDjbzvHPBtAWabNlNZKfM';
  url:string = 'http://loiane.com';
  angularCourse:boolean = true;

  courseName: string = 'Angular';

  initialValue: string = '17'

  getValue() {
    return 1;
  }

  getLikeCourse() {
    return true;
  }

  onChangedValue(event: any) {
    console.log(event.newValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
