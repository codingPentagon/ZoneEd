import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {NavComponent} from "./shared/nav/nav.component";
import {ProjectPrinComponent} from "./project-prin/project-prin.component";
import {ProjectZonalComponent} from "./project-zonal/project-zonal.component";


const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'projectprin', component: ProjectPrinComponent},
  { path: 'projectzonal', component: ProjectZonalComponent },

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
