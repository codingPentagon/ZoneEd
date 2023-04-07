import {Component} from '@angular/core';
import {Student} from "../models/student.model";
import {StudentsService} from "../services/students.service";
import {AttendanceService} from "../services/attendance.service";
import {AttendanceSheet} from "../models/attendance.model";


@Component({
  selector: 'app-attdnce-tchr',
  templateUrl: './attdnce-tchr.component.html',
  styleUrls: ['./attdnce-tchr.component.css']
})
export class AttdnceTchrComponent {
  students: Student[] = [];
  maxDate = new Date();
  clsID: number = 555;
  attendanceSheet!: AttendanceSheet;


  constructor(private studentsService: StudentsService, private attendanceService: AttendanceService) {
  }


  ngOnInit() {
    this.getStudents();
    this.getAttendance(this.maxDate);
  }

  getStudents() {
    this.studentsService.fetchStudents(this.clsID).subscribe({
      next: res => {
        this.students = res;
      }
    })
  }

  getAttendance(date: Date) {
    console.log(date.toString())
    this.attendanceService.fetchAttendance(this.clsID, date).subscribe({
      next: res => {
        this.attendanceSheet = res;
        console.log(res);
      }
    })
  }


  getPresentCount() {
    return this.attendanceSheet.attendanceRecords.filter(rec => {
      return rec.attendance
    }).length
  }

  getAbsentCount() {
    return this.attendanceSheet.attendanceRecords.filter(rec => {
      return !rec.attendance
    }).length
  }
}



