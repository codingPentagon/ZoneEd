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
    {parentLink:{value:'Class Management',icon:'class',path:'student_management'},
      childLinks:[
        {value:'Student Registration',icon:'person_add',path:'student_management'},
        {value:'Attendance',icon:'rule',path:'attendance'},
        {value:'Grades',icon:'text_increase',path:'grades'},
      ]
    },
    {parentLink:{value:'Subject Management',icon:'menu_book',path:'schedule'},
      childLinks:[
        {value:'Schedule',icon:'table_chart',path:'schedule'},
        {value:'Assessments',icon:'assignment',path:'assessments'},
        {value:'Relief Allocations',icon:'supervisor_account',path:'relief_allocations'},
      ]
    },
    {parentLink:{value:'Leave Management',icon:'work_history',path:'leave_management'},
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
