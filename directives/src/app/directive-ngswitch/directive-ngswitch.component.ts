import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngswitch',
  templateUrl: './directive-ngswitch.component.html',
  styleUrls: ['./directive-ngswitch.component.scss']
})
export class DirectiveNgswitchComponent implements OnInit {

  tab: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }
}
