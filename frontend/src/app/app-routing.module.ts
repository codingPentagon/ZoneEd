import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { RegStuComponent } from "./reg-stu/reg-stu.component";
import {NavComponent} from "./shared/nav/nav.component";
import { RegTchrComponent } from './reg-tchr/reg-tchr.component';
import { LoginComponent } from './login/login.component';
import { StuDashboardComponent } from './stu-dashboard/stu-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { RegPrinComponent } from './reg-prin/reg-prin.component';
import { ResetPassComponent } from './reset/reset-pass/reset-pass.component';



const routes: Routes = [
  //set route name for each navigation 
  { path: '', component: NavComponent },
  { path: 'studentreg', component: RegStuComponent },//for reg student
  {path:'teacherreg',component:RegTchrComponent },//for reg teacher
  {path:'login',component:LoginComponent},  //for login
  {path:'dashboard1/:fullName',component:StuDashboardComponent,canActivate:[AuthGuard]},
  {path:'principalreg',component:RegPrinComponent},
  {path:'resetPassword',component:ResetPassComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers:[AuthGuard] //use auth guard for restrict direct navigate
})
export class AppRoutingModule { }
