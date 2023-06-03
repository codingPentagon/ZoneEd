import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-tchr-class-attendance',
  templateUrl: './tchr-class-attendance.component.html',
  styleUrls: ['./tchr-class-attendance.component.css']
})
export class TchrClassAttendanceComponent {
  @Input() total: number = 50
  @Input() present: number = 0

  ngOnChanges(changes:SimpleChanges) {
    this.total = changes['total'].currentValue
    this.present = changes['present'].currentValue
  }
}
