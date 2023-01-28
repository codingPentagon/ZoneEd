import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {NavComponent} from "./shared/nav/nav.component";
import {ScheduleTchrComponent} from "./schedule-tchr/schedule-tchr.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'scheduletchr', component: ScheduleTchrComponent }
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
