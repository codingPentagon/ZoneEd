import { Component } from '@angular/core';
import {Student} from "../models/student.model";
import {StudentsService} from "../services/students.service";
import {AttendanceService} from "../services/attendance.service";


@Component({
  selector: 'app-attdnce-tchr',
  templateUrl: './attdnce-tchr.component.html',
  styleUrls: ['./attdnce-tchr.component.css']
})
export class AttdnceTchrComponent {
  students:Student[]=[];
  maxDate = new Date();
  clsID:number=555;

  constructor(private studentsService:StudentsService,private attendanceService:AttendanceService) {
  }


  ngOnInit(){
    this.getStudents();
  }

  getStudents(){
   this.studentsService.fetchStudents(this.clsID).subscribe({
     next:res=>{
       this.students=res;
     }
   })
  }

  getAttendance(date:Date){
    this.attendanceService.fetchAttendance(this.clsID,date).subscribe({
      next:res=>{console.log()}
    })
  }

}



