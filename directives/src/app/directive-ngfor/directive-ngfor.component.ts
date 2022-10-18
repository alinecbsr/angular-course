import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.scss']
})
export class DirectiveNgforComponent implements OnInit {

  courses: string[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i<this.courses[i].length; i++) {
      let course = this.courses[i];
      console.log('course', course)
    }
  }
}
