import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {NavComponent} from "./shared/nav/nav.component"
import {ReliefPrinComponent} from "./relief-prin/relief-prin.component";
import {ReliefTchrComponent} from "./relief-tchr/relief-tchr.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'relieftchr', component: ReliefTchrComponent },
  { path: 'reliefprin', component: ReliefPrinComponent },
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
