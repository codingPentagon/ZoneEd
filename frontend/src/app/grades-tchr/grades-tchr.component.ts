import { Component } from '@angular/core';

@Component({
  selector: 'app-grades-tchr',
  templateUrl: './grades-tchr.component.html',
  styleUrls: ['./grades-tchr.component.css']
})
export class GradesTchrComponent {
names =[
  {name: 'Bhagya Nethmini', isCompleted: true},
  {name: 'Rishmi Tharuka', isCompleted: true},
  {name: 'Maleesha Kawsarani', isCompleted: false},
  {name: 'Sachini Perera', isCompleted: false},
  {name: 'GayanI Herath', isCompleted: false},
  {name: 'Samadhi Fernando', isCompleted: false},
  {name: 'Maneesha Bulner', isCompleted: false},
  {name: 'Dulashi Sewmini', isCompleted: false},
  {name: 'Kavindu Sankalpa', isCompleted: false},
  {name: 'Maneth Lorance', isCompleted: false},
  {name: 'Asitha Silva', isCompleted: false},
  {name: 'Malindu Deshan', isCompleted: false},
  {name: 'Thisal Gunasena', isCompleted: false},
  {name: 'Nimesh Deshan', isCompleted: false},
  {name: 'Chethiya Nuwan', isCompleted: false},
  {name: 'Bandara Hitihamu', isCompleted: false},
  {name: 'Asitha Silva', isCompleted: false},
  {name: 'Malindu Deshan', isCompleted: false},
  {name: 'Thisal Gunasena', isCompleted: false},
  {name: 'Nimesh Deshan', isCompleted: false},
];

  grades:{subject:any,grade:number}[]=[
    {subject: 'Sinhala', grade: 80},
    {subject: 'Buddhism', grade: 90},
    {subject: 'Science', grade: 92},
    {subject: 'Mathematics', grade: 75},
    {subject: 'English', grade: 82},
    {subject: 'History', grade: 76},
    {subject: 'Dancing', grade: 81},
    {subject: 'Geography', grade: 85},
    {subject: 'Mathematics', grade: 75},
    {subject: 'English', grade: 82},
    {subject: 'History', grade: 76},
    {subject: 'Dancing', grade: 81},
    {subject: 'Geography', grade: 85},
    {subject: 'ICT', grade: 90}
  ];

  modify:boolean = false;

  modifyToggle(){
    this.modify = !this.modify;
  }

  selectedOption='all'

  getIncompleteNames() {
    return this.names.filter(name=>{
      return !name.isCompleted
    })
  }
}
