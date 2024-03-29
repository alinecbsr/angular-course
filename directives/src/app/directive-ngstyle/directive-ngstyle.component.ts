import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.scss']
})
export class DirectiveNgstyleComponent implements OnInit {

  active: boolean = false;
  fontSize: string = '10';

  constructor() { }

  ngOnInit() {
  }

  changeActive(){
    this.active = !this.active;
  }
}
