import { Component } from '@angular/core';
import {NavLinkSet} from "../../models/nav-link.model";

@Component({
  selector: 'app-base-prin',
  templateUrl: './base-prin.component.html',
  styleUrls: ['./base-prin.component.css']
})
export class BasePrinComponent {
  navLinks:NavLinkSet[]=[
    {parentLink:{value:'Dashboard',icon:'space_dashboard',path:'/principal'},
      childLinks:null
    },
    {parentLink:{value:'Staff Management',icon:'groups',path:'teacher_registration'},
      childLinks:[
        {value:'Teacher Registration',icon:'person_add',path:'teacher_registration'},
        {value:'Leave Management',icon:'work_history',path:'leave_management'},
      ]
    },
    {parentLink:{value:'Class Management',icon:'class',path:'class_management'},
      childLinks:null
    },
    {parentLink:{value:'Subject Management',icon:'menu_book',path:'teacher_schedules'},
      childLinks:[
        {value:'Teacher Schedules',icon:'table_chart',path:'teacher_schedules'},
        {value:'Relief Allocations',icon:'supervisor_account',path:'relief_allocations'}
      ]
    },
    {parentLink:{value:'Project Management',icon:'workspaces',path:'project_management'},
      childLinks:null
    },
    {parentLink:{value:'School Calendar',icon:'date_range',path:'school_calendars'},
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
