import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavLinkSet} from "../../models/nav-link.model";

@Component({
  selector: 'app-dash-parent',
  templateUrl: './dash-parent.component.html',
  styleUrls: ['./dash-parent.component.css']
})
export class DashParentComponent {
  navLinks:NavLinkSet[]=[
    {parentLink:{value:'Dashboard',icon:'space_dashboard',path:'/parent'},
      childLinks:null
    },
    {parentLink:{value:'My Children',icon:'escalator_warning',path:'my_children'},
      childLinks:null
    },
    {parentLink:{value:'My Profile',icon:'person',path:'my_profile'},
      childLinks:null
    },
    {parentLink:{value:'Mails',icon:'mail',path:'mails'},
      childLinks:null
    },
    {parentLink:{value:'Reports',icon:'analytics',path:'reports'},
      childLinks:null
    }
  ];

  constructor(private route:ActivatedRoute) {
  }

  userID:number=this.route.snapshot.params['userID'];
  children:any[] =[1]
}
