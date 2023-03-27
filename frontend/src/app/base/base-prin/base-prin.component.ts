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
    {parentLink:{value:'Staff Management',icon:'groups',path:'staff_management/teachers'},
      childLinks:[
        {value:'Teacher Registration',icon:'person_add',path:'staff_management/teachers'},
        {value:'Relief Allocations',icon:'supervisor_account',path:'staff_management/relief'}
      ]
    },
    {parentLink:{value:'Class Management',icon:'class',path:'class_management'},
      childLinks:null
    },
    {parentLink:{value:'Subject Management',icon:'menu_book',path:'subject_management/assessments'},
      childLinks:[
        {value:'Teacher Schedules',icon:'table_chart',path:'subject_management/schedules'},
        {value:'Relief Allocations',icon:'supervisor_account',path:'subject_management/relief'}
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
