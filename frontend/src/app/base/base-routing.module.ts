import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashTchrComponent} from "./dash-tchr/dash-tchr.component";
import {DashStuComponent} from "./dash-stu/dash-stu.component";
import {DashPrinComponent} from "./dash-prin/dash-prin.component";
import {DashParentComponent} from "./dash-parent/dash-parent.component";
import {DashZonalComponent} from "./dash-zonal/dash-zonal.component";
import {DashAdminComponent} from "./dash-admin/dash-admin.component";

const routes: Routes = [
  {path:'tchr/:userID', component:DashTchrComponent},
  {path:'stu/:userID', component:DashStuComponent},
  {path:'prin/:userID', component:DashPrinComponent},
  {path:'parent/:userID', component:DashParentComponent},
  {path:'zonal/:userID', component:DashZonalComponent},
  {path:'admin/:userID', component:DashAdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
