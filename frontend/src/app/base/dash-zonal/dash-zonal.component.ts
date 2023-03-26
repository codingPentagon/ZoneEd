import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavLinkSet} from "../../models/nav-link.model";

@Component({
  selector: 'app-dash-zonal',
  templateUrl: './dash-zonal.component.html',
  styleUrls: ['./dash-zonal.component.css']
})
export class DashZonalComponent {

  navLinks:NavLinkSet[]=[
    {parentLink:{value:'Dashboard',icon:'space_dashboard',path:'/zonal'},
      childLinks:null
    },
    {parentLink:{value:'Schools',icon:'school',path:'schools'},
      childLinks:null
    },
    {parentLink:{value:'Project Management',icon:'workspaces',path:'project_management'},
      childLinks:null
    },
    {parentLink:{value:'School Calendars',icon:'date_range',path:'school_calendars'},
      childLinks:null
    },
    {parentLink:{value:'Mails',icon:'mail',path:'mails'},
      childLinks:null
    },
    {parentLink:{value:'Reports',icon:'assessment',path:'reports'},
      childLinks:null
    }
  ];

  constructor(private route:ActivatedRoute) {
  }

  userID:number=this.route.snapshot.params['userID'];
  pendingProposals: any[]=[1,1,1,1];
}
