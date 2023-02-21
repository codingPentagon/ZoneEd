import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment-tchr',
  templateUrl: './assessment-tchr.component.html',
  styleUrls: ['./assessment-tchr.component.css']
})
export class AssessmentTchrComponent {

  selectedCls = 0;
  clsAssessments = [
    {class:'9A',assessments:[
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
    {class:'10A',assessments:[
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 2.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
    {class:'11A',assessments:[
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 3.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
    {class:'10B',assessments:[
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"},
        {fileName:"Assessment 4.pdf",date:"01/02/2023",time:"8.30"}
      ]
    },
  ];

}
