import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent {
  constructor(private route:ActivatedRoute) {
  }

  userID:number=this.route.snapshot.params['userID'];
  usersCount=[
    {user:'Principals',count:10},
    {user:'Teachers',count:500},
    {user:'Students',count:30000},
    {user:'Parents',count:29000}
  ]
}
