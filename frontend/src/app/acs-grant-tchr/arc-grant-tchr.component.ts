import { Component } from '@angular/core';

@Component({
  selector: 'app-acs-grant-tchr',
  templateUrl: './acs-grant-tchr.component.html',
  styleUrls: ['./acs-grant-tchr.component.css']
})
export class AcsGrantTchrComponent {
  add:boolean = false;

  addToggle() {
    this.add = !this.add;
  }
  requestDetails=
    {fromDate:'31/12/2022',fromTime:'08.00',toDate:'01/01/2023',toTime:'08.00',
    note:'I grant access you to handle principal dashboard from 30th of December until 31st of December'}

}
