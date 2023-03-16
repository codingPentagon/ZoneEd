import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashTchrComponent} from "./dash-tchr/dash-tchr.component";
import {DashStuComponent} from "./dash-stu/dash-stu.component";

const routes: Routes = [
  {path:'tchr/:userID', component:DashTchrComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
