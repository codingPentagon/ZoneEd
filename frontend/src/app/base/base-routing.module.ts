import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseTchrComponent} from "./base-tchr/base-tchr.component";
import {BaseStuComponent} from "./base-stu/base-stu.component";
import {BasePrinComponent} from "./base-prin/base-prin.component";
import {BaseParentComponent} from "./base-parent/base-parent.component";
import {BaseZonalComponent} from "./base-zonal/base-zonal.component";
import {BaseAdminComponent} from "./base-admin/base-admin.component";
import {DashTchrComponent} from "../dashboards/dash-tchr/dash-tchr.component";
import {DashStuComponent} from "../dashboards/dash-stu/dash-stu.component";
import {DashPrinComponent} from "../dashboards/dash-prin/dash-prin.component";
import {DashParentComponent} from "../dashboards/dash-parent/dash-parent.component";
import {DashZonalComponent} from "../dashboards/dash-zonal/dash-zonal.component";
import {DashAdminComponent} from "../dashboards/dash-admin/dash-admin.component";

const routes: Routes = [
  {path:'teacher', component:BaseTchrComponent,
    children:[
      {path:'', component:DashTchrComponent},
    ]
  },
  {path:'student', component:BaseStuComponent,
    children:[
      {path:'', component:DashStuComponent},
    ]
  },
  {path:'principal', component:BasePrinComponent,
    children:[
      {path:'', component:DashPrinComponent},
    ]
  },
  {path:'parent', component:BaseParentComponent,
    children:[
      {path:'', component:DashParentComponent},
    ]
  },
  {path:'zonal', component:BaseZonalComponent,
    children:[
      {path:'', component:DashZonalComponent},
    ]
  },
  {path:'admin', component:BaseAdminComponent,
    children:[
      {path:'', component:DashAdminComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
