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
  isAllMarked: boolean = false;
  presentCount!: number;
  absentCount!: number;

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
      },
      complete: () => {
        this.getAttendanceCount();
      }
    })
  }

  getStudentName(id: number) {
    return this.students.find(student => student.id == id)?.name;
  }

  getAttendanceCount() {
    this.presentCount = this.attendanceSheet?.attendanceRecords.filter(rec => {
      return rec.attendance
    }).length;

    this.absentCount = this.attendanceSheet?.attendanceRecords.filter(rec => {
      return rec.attendance != null && !rec.attendance;
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
          attendance: null
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

  checkIfAllMarked() {
    this.isAllMarked = !this.attendanceSheet.attendanceRecords.some(rec=>{
      return rec.attendance == null;
    })
  }

  protected readonly console = console;
}



