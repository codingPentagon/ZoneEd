import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent {
  constructor() {
  }

  usersCount=[
    {user:'Principals',count:10},
    {user:'Teachers',count:500},
    {user:'Students',count:30000},
    {user:'Parents',count:29000}
  ]
}
