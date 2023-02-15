import { Component } from '@angular/core';

@Component({
  selector: 'app-relief-prin',
  templateUrl: './relief-prin.component.html',
  styleUrls: ['./relief-prin.component.css']
})
export class ReliefPrinComponent {

  availTeachers = ['','Saduni Perera','Sachini Silva','Tharuka Bandara','Panchali Herath'];

  teachersOnLeave = [
    {teacher: 'Saduni Perera', subject: 'Science'},
    {teacher: 'Sachini Silva', subject: 'Sinhala'},
    {teacher: 'Tharuka Bandara', subject: 'English'},
    {teacher: 'Panchali Herath', subject: 'Maths'}
  ];

  reliefs = [
    {class:'6A', period:2, allocatedTchr:''},
    {class:'6A', period:2, allocatedTchr:''},
    {class:'6A', period:2, allocatedTchr:''},
    {class:'6A', period:2, allocatedTchr:''},
  ];

  modify:boolean = false;

  modifyToggle(){
    this.modify = !this.modify;
  }
}
