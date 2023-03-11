import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { DashStuComponent } from './dash-stu/dash-stu.component';
import { DashPrinComponent } from './dash-prin/dash-prin.component';
import { DashParentComponent } from './dash-parent/dash-parent.component';
import { DashTchrComponent } from './dash-tchr/dash-tchr.component';
import { DashZonalComponent } from './dash-zonal/dash-zonal.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';


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
    BaseRoutingModule
  ]
})
export class BaseModule { }
