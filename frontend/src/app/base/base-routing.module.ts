import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashTchrComponent} from "./dash-tchr/dash-tchr.component";

const routes: Routes = [
  {path:'', component:DashTchrComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
