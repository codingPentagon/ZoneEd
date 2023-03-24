import { Component } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-stu-yearly-attendence',
  templateUrl: './stu-yearly-attendence.component.html',
  styleUrls: ['./stu-yearly-attendence.component.css']
})
export class StuYearlyAttendenceComponent {

}
