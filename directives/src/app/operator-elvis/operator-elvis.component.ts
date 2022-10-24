import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-elvis',
  templateUrl: './operator-elvis.component.html',
  styleUrls: ['./operator-elvis.component.scss']
})
export class OperatorElvisComponent implements OnInit {

  tasks: any = {
    description: 'Task description',
    // responsible: null,
    responsible: {
      user: null
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
