import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-prin',
  templateUrl: './leave-prin.component.html',
  styleUrls: ['./leave-prin.component.css']
})
export class LeavePrinComponent {
  add: any;
  request=[
    {reason:"Medical appoinment",sentDate:"02/02/2023",fromdate:"02/02/2023",toDate:"0/02/2023",sentTime:"08.00am",status:"accepted"}]

  addToggle() {

  }
}
