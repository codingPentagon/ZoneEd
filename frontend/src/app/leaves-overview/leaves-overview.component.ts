import {Component, Input, SimpleChanges} from '@angular/core';
import {LeaveService} from "../services/leave.service";
import {LeaveRecord} from "../models/leave-record.model";

@Component({
  selector: 'app-leaves-overview',
  templateUrl: './leaves-overview.component.html',
  styleUrls: ['./leaves-overview.component.css']
})
export class LeavesOverviewComponent {
  @Input() teacherID!: number;
  leaveRecords: LeaveRecord[] = []
  duty: number = 0;
  sick: number = 0;
  other: number = 0;

  constructor(private leaveService: LeaveService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.teacherID ? this.getLeaveRecords() : null;
  }

  getLeaveRecords() {
    this.leaveService.fetchLeaveRecords(this.teacherID).subscribe({
      next: res => {
        this.leaveRecords = res;

      },
      complete: () => {
        this.sick = this.getLeavesCount('sick')
        this.duty = this.getLeavesCount('duty')
        this.other = this.getLeavesCount('other')
      }

    })
  }

  getLeavesCount(type: string) {
    const leaves = this.leaveRecords.filter(rec => {
      return rec.leaveType.toLowerCase() == type;
    });
    let count = 0;
    leaves.forEach(rec => {
      count += rec.dates.length;
    });
    return count;
  }
}
