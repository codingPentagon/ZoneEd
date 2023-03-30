import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashAdminComponent} from "./dash-admin/dash-admin.component";
import {DashTchrComponent} from "./dash-tchr/dash-tchr.component";
import {DashParentComponent} from "./dash-parent/dash-parent.component";
import {DashPrinComponent} from "./dash-prin/dash-prin.component";
import {DashStuComponent} from "./dash-stu/dash-stu.component";
import {DashZonalComponent} from "./dash-zonal/dash-zonal.component";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    DashAdminComponent,
    DashTchrComponent,
    DashParentComponent,
    DashPrinComponent,
    DashStuComponent,
    DashZonalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
  ]
})
export class DashboardsModule { }
