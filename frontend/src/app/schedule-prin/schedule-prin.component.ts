import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-prin',
  templateUrl: './schedule-prin.component.html',
  styleUrls: ['./schedule-prin.component.css']
})
export class SchedulePrinComponent {
  navLinks = [
    {path:'', value:'Dashboard', icon:'space_dashboard'},
    {path:'/scheduletchr', value:'Schedule', icon:'schedule'},
    {path:'/scheduleprin', value:"Teacher's Schedule", icon:'schedule'}
  ];
}
