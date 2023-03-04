import { Component } from '@angular/core';

@Component({
  selector: 'app-cls-allocate',
  templateUrl: './cls-allocate.component.html',
  styleUrls: ['./cls-allocate.component.css']
})
export class ClsAllocateComponent {
  clsAllocation: any[] = [
    {teacher: null, class: '6 A'},
    {teacher: null, class: '6 B'},
    {teacher: null, class: '7 A'},
    {teacher: null, class: '7 B'},
    {teacher: null, class: '8 A'},
    {teacher: null, class: '8 B'},
    {teacher: null, class: '9 A'},
    {teacher: null, class: '9 B'},
    {teacher: null, class: '10 A'},
    {teacher: null, class: '10 B'},
    {teacher: null, class: '11 A'},
    {teacher: null, class: '11 B'},
    {teacher: null, class: '12 A'},
    {teacher: null, class: '12 B'}
  ];

  teachers: any[] = [
    {value: 'SaduniPerera', viewValue: 'Saduni Perera'},
    {value: 'SachiniSilva', viewValue: 'Sachini Silva'},
    {value: 'TharukaBandara', viewValue: 'Tharuka Bandara'},
    {value: 'PanchaliHerath', viewValue: 'Panchali Herath'}

    ];

  create:boolean = false;

  createToggle(){
    this.create = !this.create;
  }

  modify:boolean = false;

  modifyToggle(){
    this.modify = !this.modify;
  }


}
