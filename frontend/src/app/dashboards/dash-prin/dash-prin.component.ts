import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-prin',
  templateUrl: './dash-prin.component.html',
  styleUrls: ['./dash-prin.component.css']
})
export class DashPrinComponent {

  constructor() {
  }

  classAttendance: any[] = [1,1,1,1,1,1,1];
  teachersOnLeave:any[] = [1,1,1,1];
  upcomingMilestones:any[] = [1,1,1,1]
}
