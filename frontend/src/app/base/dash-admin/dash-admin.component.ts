import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavLinkSet} from "../../models/nav-link.model";

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent {
  constructor(private route:ActivatedRoute) {
  }

  navLinks:NavLinkSet[]=[
    {parentLink:{value:'Dashboard',icon:'space_dashboard',path:'/admin'},
      childLinks:null
    },
    {parentLink:{value:'Schools',icon:'school',path:'schools'},
      childLinks:null
    },
    {parentLink:{value:'User Management',icon:'people',path:'user_management'},
      childLinks:null
    },
    {parentLink:{value:'My Profile',icon:'person',path:'my_profile'},
      childLinks:null
    },
    {parentLink:{value:'Mails',icon:'mail',path:'mails'},
      childLinks:null
    },
    {parentLink:{value:'Reports',icon:'assessment',path:'reports'},
      childLinks:null
    }
  ];
  userID:number=this.route.snapshot.params['userID'];
  usersCount=[
    {user:'Principals',count:10},
    {user:'Teachers',count:500},
    {user:'Students',count:30000},
    {user:'Parents',count:29000}
  ]
}
