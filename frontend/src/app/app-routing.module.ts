import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { RegStuComponent } from "./reg-stu/reg-stu.component";
import {NavComponent} from "./shared/nav/nav.component";
import {MailComponent} from "./mail/mail.component";
import {ClsAllocateComponent} from "./cls-allocate/cls-allocate.component";
import {AcsGrantPrinComponent} from "./acs-grant-prin/acs-grant-prin.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'studentreg', component: RegStuComponent },
  { path: 'mail', component: MailComponent },
  { path: 'clsallocate', component: ClsAllocateComponent },
  { path: 'acsgrant', component: AcsGrantPrinComponent }
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
