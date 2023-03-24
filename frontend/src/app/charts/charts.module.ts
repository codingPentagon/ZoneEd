import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuYearlyAttendenceComponent } from './stu-yearly-attendence/stu-yearly-attendence.component';
import { StuGradesOverviewComponent } from './stu-grades-overview/stu-grades-overview.component';



@NgModule({
  declarations: [
    StuYearlyAttendenceComponent,
    StuGradesOverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChartsModule { }
