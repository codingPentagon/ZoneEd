import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { RegStuComponent } from "./reg-stu/reg-stu.component";
import {NavComponent} from "./shared/nav/nav.component";
import { RegTchrComponent } from './reg-tchr/reg-tchr.component';
import { TchDashboardComponent } from './tch-dashboard/tch-dashboard.component';

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'studentreg', component: RegStuComponent },
  {path:'teacherreg',component:RegTchrComponent },
  {path:'dashboard',component:TchDashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
