import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-tchr',
  templateUrl: './schedule-tchr.component.html',
  styleUrls: ['./schedule-tchr.component.css']
})
export class ScheduleTchrComponent {

  navLinks = [
    {path:'', value:'Dashboard', icon:'space_dashboard'},
    {path:'/scheduletchr', value:'Schedule', icon:'schedule'},
    {path:'/scheduleprin', value:"Teacher's Schedule", icon:'schedule'}
  ];
  schedule = [
    { period: 1, mon:"10A", tue:"---", wed:"10A", thu:"10A", fri:"10A" },
    { period: 2, mon:"10A", tue:"10A", wed:"---", thu:"10A", fri:"10A" },
    { period: 3, mon:"---", tue:"10A", wed:"10A", thu:"---", fri:"10A" },
    { period: 4, mon:"---", tue:"10A", wed:"10A", thu:"10A", fri:"---" },
    { period: 5, mon:"10A", tue:"10A", wed:"10A", thu:"10A", fri:"10A" },
    { period: 6, mon:"10A", tue:"---", wed:"10A", thu:"10A", fri:"10A" },
    { period: 7, mon:"10A", tue:"10A", wed:"---", thu:"---", fri:"10A" },
    { period: 8, mon:"10A", tue:"10A", wed:"10A", thu:"10A", fri:"10A" }
  ];

  displayedColumns: string[] = ['period','mon','tue','wed','thu','fri'];
}
