import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {NoticeComponent} from "./notice/notice.component";

import {NavComponent} from "./shared/nav/nav.component";
import {MailComponent} from "./mail/mail.component";

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'mail', component: MailComponent },
  { path: 'notice', component: NoticeComponent }
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
