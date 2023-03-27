import { Component } from '@angular/core';
import {NavLinkSet} from "../../models/nav-link.model";

@Component({
  selector: 'app-base-tchr',
  templateUrl: './base-tchr.component.html',
  styleUrls: ['./base-tchr.component.css']
})
export class BaseTchrComponent {
  navLinks:NavLinkSet[]=[
    {parentLink:{value:'Dashboard',icon:'space_dashboard',path:'/teacher'},
      childLinks:null
    },
    {parentLink:{value:'Class Management',icon:'class',path:'class_management/students'},
      childLinks:[
        {value:'Student Registration',icon:'person_add',path:'class_management/students'},
        {value:'Student Attendance',icon:'rule',path:'class_management/attendance'},
        {value:'Student Grades',icon:'text_increase',path:'class_management/grades'}
      ]
    },
    {parentLink:{value:'Subject Management',icon:'menu_book',path:'subject_management/schedules'},
      childLinks:[
        {value:'Schedule',icon:'table_chart',path:'subject_management/schedules'},
        {value:'Assessments',icon:'assignment',path:'subject_management/schedules'},
        {value:'Relief Allocations',icon:'supervisor_account',path:'subject_management/relief'}
      ]
    },
    {parentLink:{value:'Leave Management',icon:'work_history',path:'school_calendars'},
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
