import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {NavComponent} from "./shared/nav/nav.component";
import {LeavePrinComponent} from "./leave-prin/leave-prin.component";
import {LeaveTchrComponent} from "./leave-tchr/leave-tchr.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'leaveprin', component: LeavePrinComponent },
  { path: 'leavetchr', component: LeaveTchrComponent }
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
