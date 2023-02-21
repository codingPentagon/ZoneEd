import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment-stu',
  templateUrl: './assessment-stu.component.html',
  styleUrls: ['./assessment-stu.component.css']
})
export class AssessmentStuComponent {

  selectedSubject = 0;
  subjectAssessments = [
    {subject:'9A',assessments:[
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
    {subject:'10A',assessments:[
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
    {subject:'11A',assessments:[
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
    {subject:'10B',assessments:[
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
  ];
}
