import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-tchr',
  templateUrl: './dash-tchr.component.html',
  styleUrls: ['./dash-tchr.component.css']
})
export class DashTchrComponent {

  constructor() {
  }

  reliefToday:any[] =[1,1,1];
  schedulePeriods:any[] = [1,1,1,1,1,1,1,1];
}
