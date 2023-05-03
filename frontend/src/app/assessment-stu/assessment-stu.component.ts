import { Component } from '@angular/core';
import {Subject} from "../models/subject.model";
import {SubjectsService} from "../services/subjects.service";
import {Assessment} from "../models/assessment.model";
import {AssessmentsService} from "../services/assessments.service";

@Component({
  selector: 'app-assessment-stu',
  templateUrl: './assessment-stu.component.html',
  styleUrls: ['./assessment-stu.component.css']
})
export class AssessmentStuComponent {

  selectedSubjectID = 0;
  userID:number = 3703;
  sclID:number = 5555;
  classID:number = 416;
  takenSubjects:Subject[] = [];
  assessments:Assessment[] = [];

  constructor(private subjectsService:SubjectsService,private assessmentsService:AssessmentsService) {
  }

  ngOnInit(): void {
    this.getTakenSubjects();
  }

  getTakenSubjects(){
    this.subjectsService.fetchTakenSubjects(this.userID).subscribe({
      next: res => {
        this.takenSubjects = res;
        this.selectedSubjectID = res[0].id;
      },
      complete: () => {
        this.getAssessments();
      }
    })
  }

  getAssessments(){
    this.assessmentsService.fetchAssessments(this.sclID,this.classID,this.selectedSubjectID).subscribe({
      next: res => {
        this.assessments = res;
        console.log(res)
      }
    })
  }

  subjectAssessments = [
    {subject:'Science',assessments:[
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
    {subject:'Maths',assessments:[
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
    {subject:'Sinhala',assessments:[
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
    {subject:'English',assessments:[
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
  ];
}
