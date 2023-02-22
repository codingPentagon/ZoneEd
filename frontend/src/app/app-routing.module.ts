import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {NavComponent} from "./shared/nav/nav.component";
import {AcsGrantPrinComponent} from "./acs-grant-prin/acs-grant-prin.component";
import {AcsGrantTchrComponent} from "./acs-grant-tchr/arc-grant-tchr.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'accessgrantprin', component: AcsGrantPrinComponent },
  { path: 'accessgranttchr', component: AcsGrantTchrComponent }
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
