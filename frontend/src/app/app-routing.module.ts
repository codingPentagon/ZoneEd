import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { BaseComponent } from "./shared/base/base.component";
import { MailComponent } from "./mail/mail.component";

const routes: Routes = [
  { path: 'base', component: BaseComponent },
  { path: 'mail', component: MailComponent }
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
