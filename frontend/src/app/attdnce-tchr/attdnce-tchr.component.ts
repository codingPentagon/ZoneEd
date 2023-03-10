import { Component } from '@angular/core';
import {Student} from "../models/student.model";
import {StudentsService} from "../services/students.service";
import {AttendanceService} from "../services/attendance.service";
import {AttendanceRecord} from "../models/attendance.model";


@Component({
  selector: 'app-attdnce-tchr',
  templateUrl: './attdnce-tchr.component.html',
  styleUrls: ['./attdnce-tchr.component.css']
})
export class AttdnceTchrComponent {
  students:Student[]=[];
  maxDate = new Date() ;
  clsID:number=555;
  attndanceRecords:AttendanceRecord[]=[];


  constructor(private studentsService:StudentsService,private attendanceService:AttendanceService) {
  }


  ngOnInit(){
    this.getStudents();
    this.getAttendance(this.maxDate);
  }

  getStudents(){
   this.studentsService.fetchStudents(this.clsID).subscribe({
     next:res=>{
       this.students=res;
     }
   })
  }

  getAttendance(date: Date){
    console.log(date.toISOString())
    this.attendanceService.fetchAttendance(this.clsID,date).subscribe({
      next:res=>{this.attndanceRecords=res}
    })
    console.log(this.attndanceRecords);
  }

  getAttendanceRecord(id: number) {
    if (this.attndanceRecords.length==0){
      return false;
    }
    else {
      return this.attndanceRecords.filter(rec=>{
        return rec.studentID==id;
      })[0].attendance
    }
  }
}



