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
  selectedDate: Date = new Date();
  marked!:boolean;

  constructor(private studentsService: StudentsService, private attendanceService: AttendanceService) {
  }


  ngOnInit() {
    this.getStudents();
    this.getAttendance();
  }

  getStudents() {
    this.studentsService.fetchStudents(this.clsID).subscribe({
      next: res => {
        this.students = res;
      }
    })
  }

  getAttendance() {
    this.attendanceService.fetchAttendance(this.clsID, this.selectedDate).subscribe({
      next: res => {
        if (res) {
          this.attendanceSheet = res;
          this.marked = true;
        }
        else {
          this.createTempAttendanceSheet();
          this.marked = false;
        }
      }
    })
  }

  getStudentName(id: number) {
    return this.students.find(student => student.id == id)?.name;
  }

  getPresentCount() {
    return this.attendanceSheet?.attendanceRecords.filter(rec => {
      return rec.attendance
    }).length
  }

  getAbsentCount() {
    return this.attendanceSheet?.attendanceRecords.filter(rec => {
      return !rec.attendance
    }).length
  }

  createTempAttendanceSheet() {
    console.log(this.selectedDate)
    this.attendanceSheet = {
      id: 0,
      classID: this.clsID,
      date: this.selectedDate,
      attendanceRecords: this.students.map(student => {
        return {
          studentID: student.id,
          attendance: false
        }
      })
    }
  }

  createAttendance(){
    this.attendanceService.addAttendance(this.attendanceSheet).subscribe({
      next: res => {
        console.log(res);
      },
      complete:()=>{
        this.getAttendance();
      }
    })
  }
}



