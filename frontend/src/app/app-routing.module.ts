import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {NavComponent} from "./shared/nav/nav.component";
import {ClsAllocateComponent} from "./cls-allocate/cls-allocate.component";
import {AttdnceTchrComponent} from "./attdnce-tchr/attdnce-tchr.component";
import {GradesTchrComponent} from "./grades-tchr/grades-tchr.component";
import {GradesStuComponent} from "./grades-stu/grades-stu.component";
import {AttdnceStuComponent} from "./attdnce-stu/attdnce-stu.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'clsallocate', component: ClsAllocateComponent },
  { path: 'attndncetchr', component: AttdnceTchrComponent },
  { path: 'gradestchr', component: GradesTchrComponent },
  { path: 'gradesstu', component: GradesStuComponent },
  { path: 'attndncestu', component: AttdnceStuComponent }
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
