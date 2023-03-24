import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuYearlyAttendenceComponent } from './stu-yearly-attendence/stu-yearly-attendence.component';
import { StuGradesOverviewComponent } from './stu-grades-overview/stu-grades-overview.component';
import { TchrSubjectsPerfComponent } from './tchr-subjects-perf/tchr-subjects-perf.component';
import { TchrLeaveOverviewComponent } from './tchr-leave-overview/tchr-leave-overview.component';



@NgModule({
  declarations: [
    StuYearlyAttendenceComponent,
    StuGradesOverviewComponent,
    TchrSubjectsPerfComponent,
    TchrLeaveOverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChartsModule { }
