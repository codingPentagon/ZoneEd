import { Component } from '@angular/core';
import {Student} from "../models/student.model";
import {StudentsService} from "../services/students.service";


@Component({
  selector: 'app-attdnce-tchr',
  templateUrl: './attdnce-tchr.component.html',
  styleUrls: ['./attdnce-tchr.component.css']
})
export class AttdnceTchrComponent {
  students:Student[]=[];
  maxDate = new Date();
  clsID:number=555;

  constructor(private studentsService:StudentsService) {
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

}



