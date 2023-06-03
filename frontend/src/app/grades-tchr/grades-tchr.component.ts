import { Component } from '@angular/core';
import {Student} from "../models/student.model";
import {StudentsService} from "../services/students.service";
import {MarksheetService} from "../services/marksheet.service";
import {Marksheet} from "../models/marksheet.model";
import {Subject} from "../models/subject.model";
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-grades-tchr',
  templateUrl: './grades-tchr.component.html',
  styleUrls: ['./grades-tchr.component.css']
})
export class GradesTchrComponent {

  students:Student[] = [];
  clsID:number=555;
  marksheets:Marksheet[]=[];
  term:number=1;
  year:number=new Date().getFullYear();
  selectedStudent:number=0;
  subjects:Subject[] = [];
  totalMarks:number = 0;
  currentMarksheet!:Marksheet;

  constructor(private studentService:StudentsService, private marksheetService:MarksheetService,private subjectService:SubjectService) {
  }

  ngOnInit(){
    this.getStudents();
    this.getMarksheets();
  }

  getStudents(){
    this.studentService.fetchStudents(this.clsID).subscribe({
      next:res=>{
        this.students=res;
      },
      complete:()=>{
        this.getSubjects();
      }
    })
  }

  getMarksheets(){
    this.marksheetService.fetchMarksheets(this.clsID,this.year,this.term).subscribe({
      next:res=>{
        this.marksheets=res;
      },
      complete:()=>{
        this.getSubjects();
      }
    })
  }

  getTotalMarks(){
    this.totalMarks=0;
    this.marksheets[this.selectedStudent]?.marks.forEach(mark=>{
      this.totalMarks+=(mark.mark == null ? 0 : mark.mark);
    })
  }

  getSubjects(){
    const subjectIDs:number[] = this.students[this.selectedStudent]?.takenSubjectIDs;

    if(subjectIDs?.length){
      this.subjectService.fetchSubjects(subjectIDs).subscribe({
        next:res=>{
          this.subjects=res;
        },
        complete:()=>{
          this.getCurrentMarksheet();
          this.getTotalMarks();
        }
      });
    }
    else{
      this.subjects = [];
      this.getCurrentMarksheet();
      this.getTotalMarks();
    }
  }

  getCurrentMarksheet(){
    this.currentMarksheet = this.marksheets.find((marksheet)=>{
      return marksheet.studentID == this.students[this.selectedStudent]?.id;
    })!;

    if(this.currentMarksheet == undefined){
      this.currentMarksheet = {
        id:0,
        studentID:this.students[this.selectedStudent]?.id,
        marks:[],
        year:this.year,
        term:this.term,
        classID:this.clsID,
        totalMarks:0,
        rank:0,
        isCompleted:false
      }
      this.subjects.forEach(subject=>{
        this.currentMarksheet.marks.push({
          subjectID:subject.id,
          mark:null
        })
      })
    }
  }

  getSubjectName(subjectID:number){
    return this.subjects.find((sub)=>{
      return sub.id==subjectID;
    })?.name
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
    {value: 1, viewValue: '1st Term'},
    {value: 2, viewValue: '2nd Term'},
    {value: 3, viewValue: '3rd Term'},
  ];

}

