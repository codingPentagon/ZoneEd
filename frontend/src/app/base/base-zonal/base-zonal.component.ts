import { Component } from '@angular/core';
import {NavLinkSet} from "../../models/nav-link.model";

@Component({
  selector: 'app-base-zonal',
  templateUrl: './base-zonal.component.html',
  styleUrls: ['./base-zonal.component.css']
})
export class BaseZonalComponent {
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
    {parentLink:{value:'My Profile',icon:'account_circle',path:'my_profile'},
      childLinks:null
    },
    {parentLink:{value:'Mails',icon:'mail',path:'mails'},
      childLinks:null
    },
    {parentLink:{value:'Reports',icon:'assessment',path:'reports'},
      childLinks:null
    }
  ];
}
