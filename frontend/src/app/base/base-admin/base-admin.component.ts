import { Component } from '@angular/core';
import {NavLinkSet} from "../../models/nav-link.model";

@Component({
  selector: 'app-base-admin',
  templateUrl: './base-admin.component.html',
  styleUrls: ['./base-admin.component.css']
})
export class BaseAdminComponent {
  navLinks:NavLinkSet[]=[
    {parentLink:{value:'Dashboard',icon:'space_dashboard',path:'/admin'},
      childLinks:null
    },
    {parentLink:{value:'Schools',icon:'school',path:'schools'},
      childLinks:null
    },
    {parentLink:{value:'User Management',icon:'manage_accounts',path:'user_management'},
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
