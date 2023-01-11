import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {NavComponent} from "./shared/nav/nav.component";
import {AcsGrantPrinComponent} from "./acs-grant-prin/acs-grant-prin.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'accessgrant', component: AcsGrantPrinComponent }
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
