import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseRoutingModule} from './base-routing.module';
import {SharedModule} from "../shared/shared.module";
import {BaseAdminComponent} from './base-admin/base-admin.component';
import {BaseZonalComponent} from './base-zonal/base-zonal.component';
import {BasePrinComponent} from './base-prin/base-prin.component';
import {BaseTchrComponent} from './base-tchr/base-tchr.component';
import {BaseStuComponent} from './base-stu/base-stu.component';
import {BaseParentComponent} from './base-parent/base-parent.component';
import {DashboardsModule} from "../dashboards/dashboards.module";


@NgModule({
  declarations: [
    BaseAdminComponent,
    BaseZonalComponent,
    BasePrinComponent,
    BaseTchrComponent,
    BaseStuComponent,
    BaseParentComponent,
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
    DashboardsModule
  ]
})
export class BaseModule {
}
