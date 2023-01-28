import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-tchr',
  templateUrl: './schedule-tchr.component.html',
  styleUrls: ['./schedule-tchr.component.css']
})
export class ScheduleTchrComponent {
  schedule = [
    { day: 'Monday', mon:"10A", tue:"10A", wed:"10A", thu:"10A", fri:"10A"},
  ];

  displayedColumns: string[] = ['day','mon','tue','wed','thu','fri'];
}
