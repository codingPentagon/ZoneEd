import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {NavComponent} from "./shared/nav/nav.component";
import {NoticeComponent} from "./notice/notice.component";

const routes: Routes = [
  { path: '', component: NavComponent },
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
