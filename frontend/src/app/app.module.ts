import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import { ClsAllocateComponent } from './cls-allocate/cls-allocate.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import { AttdnceTchrComponent } from './attdnce-tchr/attdnce-tchr.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule,} from "@angular/material/core";
import {MatDividerModule} from "@angular/material/divider";
import { GradesTchrComponent } from './grades-tchr/grades-tchr.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import { GradesStuComponent } from './grades-stu/grades-stu.component';
import { AttdnceStuComponent } from './attdnce-stu/attdnce-stu.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ServicesModule} from "./services/services.module";
import { StuYearlyAttendenceComponent } from './charts/stu-yearly-attendence/stu-yearly-attendence.component';
import { StuGradesOverviewComponent } from './charts/stu-grades-overview/stu-grades-overview.component';
import { TchrSubjectsPerfComponent } from './charts/tchr-subjects-perf/tchr-subjects-perf.component';
import { TchrLeaveOverviewComponent } from './charts/tchr-leave-overview/tchr-leave-overview.component';




@NgModule({
  declarations: [
    AppComponent,
    ClsAllocateComponent,
    AttdnceTchrComponent,
    GradesTchrComponent,
    GradesStuComponent,
    AttdnceStuComponent,
    StuYearlyAttendenceComponent,
    StuGradesOverviewComponent,
    TchrSubjectsPerfComponent,
    TchrLeaveOverviewComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatDividerModule,
    MatGridListModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatButtonToggleModule,
    ServicesModule,
    MatNativeDateModule,

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
