import { Component } from '@angular/core';

@Component({
  selector: 'app-relief-tchr',
  templateUrl: './relief-tchr.component.html',
  styleUrls: ['./relief-tchr.component.css']
})
export class ReliefTchrComponent {
  reliefAllocation = [
    {class:'10B',subject:'Science',fromTime:'8.50',toTime:'9.30',period:3,assmntCount:1},
    {class:'10A',subject:'Sinhala',fromTime:'12.10',toTime:'11.30',period:4,assmntCount:2},
    {class:'11B',subject:'English',fromTime:'12.50',toTime:'13.30',period:8,assmntCount:0},
    {class:'9B',subject:'Maths',fromTime:'11.10',toTime:'11.50',period:5,assmntCount:1},
    {class:'9B',subject:'Maths',fromTime:'11.10',toTime:'11.50',period:5,assmntCount:1},
    {class:'9B',subject:'Maths',fromTime:'11.10',toTime:'11.50',period:5,assmntCount:1},
    {class:'8B',subject:'ICT',fromTime:'12.10',toTime:'12.50',period:3,assmntCount:0}
  ];

  fwdAssessments = [
    {fileName:"Assessment 2.pdf",class:"8A",time:"8.00"},
    {fileName:"Assessment 3.pdf",class:"9A",time:"9.00"},
    {fileName:"Assessment 1.docx",class:"8B",time:"8.30"},
    {fileName:"Assessment 4.doc",class:"10A",time:"9.00"},
    {fileName:"Assessment 2.pdf",class:"10B",time:"7.00"},
  ]
}
