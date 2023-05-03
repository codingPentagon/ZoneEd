import { Component } from '@angular/core';
import {Subject} from "../models/subject.model";
import {SubjectsService} from "../services/subjects.service";

@Component({
  selector: 'app-assessment-stu',
  templateUrl: './assessment-stu.component.html',
  styleUrls: ['./assessment-stu.component.css']
})
export class AssessmentStuComponent {

  selectedSubjectID = 0;
  userID:number = 3703;
  takenSubjects:Subject[] = [];

  constructor(private subjectsService:SubjectsService) {
  }

  ngOnInit(): void {
    this.getTakenSubjects();
  }

  getTakenSubjects(){
    this.subjectsService.fetchTakenSubjects(this.userID).subscribe({
      next: res => {
        this.takenSubjects = res;
        this.selectedSubjectID = res[0].id;
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
