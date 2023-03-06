import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-tchr',
  templateUrl: './leave-tchr.component.html',
  styleUrls: ['./leave-tchr.component.css']
})
export class LeaveTchrComponent {

  requests=[
    {condition:"Medical appointment", sentDate:"02/05/2023", fromDate:"03/05/2023", sentTime:"08.30p.m", toDate:"04/05/2023", status:"Pending"},
    {condition:"Medical appointment", sentDate:"02/05/2023", fromDate:"03/05/2023", sentTime:"08.30p.m", toDate:"04/05/2023", status:"Pending"},
  ];

  add: boolean= false;

  addToggle() {
    this.add=!this.add;

  }
}
