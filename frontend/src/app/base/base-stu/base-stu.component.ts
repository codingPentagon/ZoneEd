import { Component } from '@angular/core';
import {NavLinkSet} from "../../models/nav-link.model";

@Component({
  selector: 'app-base-stu',
  templateUrl: './base-stu.component.html',
  styleUrls: ['./base-stu.component.css']
})
export class BaseStuComponent {
  navLinks:NavLinkSet[]=[
    {parentLink:{value:'Dashboard',icon:'space_dashboard',path:'/student'},
      childLinks:null
    },
    {parentLink:{value:'Attendance',icon:'rule',path:'attendance'},
      childLinks:null
    },
    {parentLink:{value:'Grades',icon:'text_increase',path:'grades'},
      childLinks:null
    },
    {parentLink:{value:'Assessments',icon:'assignment',path:'assessments'},
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
