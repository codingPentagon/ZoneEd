import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { DashStuComponent } from './dash-stu/dash-stu.component';
import { DashPrinComponent } from './dash-prin/dash-prin.component';
import { DashParentComponent } from './dash-parent/dash-parent.component';
import { DashTchrComponent } from './dash-tchr/dash-tchr.component';
import { DashZonalComponent } from './dash-zonal/dash-zonal.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    DashStuComponent,
    DashPrinComponent,
    DashParentComponent,
    DashTchrComponent,
    DashZonalComponent,
    DashAdminComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class BaseModule { }
