import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {NavComponent} from "./shared/nav/nav.component";
import {AssessmentTchrComponent} from "./assessment-tchr/assessment-tchr.component";
import {AssessmentStuComponent} from "./assessment-stu/assessment-stu.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'assessmenttchr', component: AssessmentTchrComponent},
  { path: 'assessmentstu', component: AssessmentStuComponent },
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
export class AppRoutingModule {

}
