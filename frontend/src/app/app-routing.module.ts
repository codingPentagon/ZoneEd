import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { RegStuComponent } from "./reg-stu/reg-stu.component";
import {NavComponent} from "./shared/nav/nav.component";
import { RegTchrComponent } from './reg-tchr/reg-tchr.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'studentreg', component: RegStuComponent },
  {path:'teacherreg',component:RegTchrComponent },
  {path:'login',component:LoginComponent}

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
