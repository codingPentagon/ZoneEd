import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";


import {NavComponent} from "./shared/nav/nav.component";
import { TchrProfileComponent } from './tchr-profile/tchr-profile.component';

const routes: Routes = [
  { path: '', component: NavComponent },
  {path:'tchProfile',component:TchrProfileComponent }


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
