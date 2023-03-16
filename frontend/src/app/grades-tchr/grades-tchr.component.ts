import { Component } from '@angular/core';
import {Student} from "../models/student.model";
import {StudentsService} from "../services/students.service";
import {Marksheet} from "../models/marksheet.model";
import {MarksheetService} from "../services/marksheet.service";

@Component({
  selector: 'app-grades-tchr',
  templateUrl: './grades-tchr.component.html',
  styleUrls: ['./grades-tchr.component.css']
})
export class GradesTchrComponent {

  students:Student[] = [];
  clsID:number=555;
  marksheet:Marksheet={id:0,classID:0,studentID:0,totalMarks:0,year:0,term:0,rank:0,isCompleted:false,marks:[]};
  term:number=1;
  year:number=new Date().getFullYear();
  selectedStudentID:number=0;

  constructor(private studentService:StudentsService, private marksheetService:MarksheetService) {
  }

  ngOnInit(){
    this.studentService.fetchStudents(this.clsID).subscribe({
      next:res=>{
        this.students=res;
      }
    })
  }

  getMarksheet(){
    this.marksheetService.fetchMarksheet(this.selectedStudentID,this.year,this.term).subscribe({
      next:res=>{
        this.marksheet=res;
      }
    })
  }

  modify:boolean = false;

  modifyToggle(){
    this.modify = !this.modify;
  }

  selectedOption='all'

  // getIncompleteNames() {
  //   return this.students.filter(student=>{
  //     return !name.isCompleted
  //   })
  // }

  terms: any[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
];}

