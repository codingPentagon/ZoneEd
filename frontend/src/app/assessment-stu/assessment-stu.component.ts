import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment-stu',
  templateUrl: './assessment-stu.component.html',
  styleUrls: ['./assessment-stu.component.css']
})
export class AssessmentStuComponent {

  subjects = ["Science","Sinhala","English","Maths","Buddhism","Music"];

  assessments  = [
    {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
    {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
    {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
    {fileName:"Assessment 1.pdf",date:"01/02/2023",time:"8.30"},
  ]
}
