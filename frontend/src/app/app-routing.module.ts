import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { StuDashboardComponent } from './stu-dashboard/stu-dashboard.component';
import {NavComponent} from "./shared/nav/nav.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  {path:'stuDash',component:StuDashboardComponent}

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
