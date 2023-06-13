import { Component } from '@angular/core';
import {Marksheet} from "../models/marksheet.model";
import {MarksheetService} from "../services/marksheet.service";
import {SubjectService} from "../services/subject.service";

@Component({
  selector: 'app-grades-stu',
  templateUrl: './grades-stu.component.html',
  styleUrls: ['./grades-stu.component.css']
})
export class GradesStuComponent {
  years:number[]=[]
  marksheets:Marksheet[]=[]
  userID:number=4939
  selectedYear!:number;
  selectedTerm:number=1;
  currentMarksheet!:Marksheet;

  constructor(private marksheetService:MarksheetService,private subjectService:SubjectService) {
  }

  ngOnInit(): void {
    this.getMarksheet();
  }

  getMarksheet(){
    this.marksheetService.fetchStudentMarksheets(this.userID).subscribe({
      next: res=>{
        this.marksheets=res
        this.marksheets.forEach(marksheet=>{
          this.years.push(marksheet.year)
        })
        this.selectedYear=this.years[this.years.length-1];
      },
      complete: ()=>{
        this.getCurrentMarksheet()
      }
    })
  }

  getCurrentMarksheet(){
    console.log(1)
    this.currentMarksheet =  this.marksheets.find(marksheet=>marksheet.year==this.selectedYear && marksheet.term==this.selectedTerm)!;
    this.getSubjectNames();
  }

  getSubjectNames(){
    this.currentMarksheet?.marks.forEach(mark=>{
      this.subjectService.fetchSubject(mark.subjectID).subscribe({
        next: res=>{
          mark.subjectName=res.name
        }
      })
    })
  }


  terms: any[] = [
    {value: 1, viewValue: '1st Term'},
    {value: 2, viewValue: '2nd Term'},
    {value: 3, viewValue: '3rd Term'},
  ];

}
