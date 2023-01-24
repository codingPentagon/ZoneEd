import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {NavComponent} from "./shared/nav/nav.component";
import {ClsAllocateComponent} from "./cls-allocate/cls-allocate.component";
import {AttdnceTchrComponent} from "./attdnce-tchr/attdnce-tchr.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'clsallocate', component: ClsAllocateComponent },
  { path: 'attndncetchr', component: AttdnceTchrComponent }
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
