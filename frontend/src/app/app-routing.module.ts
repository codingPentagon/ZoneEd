import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {RegStuComponent} from "./reg-stu/reg-stu.component";
import {NavComponent} from "./shared/nav/nav.component";
import {HeaderComponent} from "./shared/header/header.component";

const routes: Routes = [
  {path: '', component: NavComponent},
  {path: 'studentreg', component: RegStuComponent, children: [{path: 'page1', component: HeaderComponent}]},
  {path: 'home', component: NavComponent, children: [{path: 'header', component: HeaderComponent}]}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
