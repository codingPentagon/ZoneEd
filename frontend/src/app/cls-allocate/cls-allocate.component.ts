import { Component } from '@angular/core';

@Component({
  selector: 'app-cls-allocate',
  templateUrl: './cls-allocate.component.html',
  styleUrls: ['./cls-allocate.component.css']
})
export class ClsAllocateComponent {
  classes: any[] = [
    {value: '6A', viewValue: '6 A'},
    {value: '6B', viewValue: '6 B'},
    {value: '7A', viewValue: '7 A'},
    {value: '7B', viewValue: '7 B'},
    {value: '8A', viewValue: '8 A'},
    {value: '8B', viewValue: '8 B'},
    {value: '9A', viewValue: '9 A'},
    {value: '9B', viewValue: '9 B'},
    {value: '10A', viewValue: '10 A'},
    {value: '10B', viewValue: '10 B'},
    {value: '11A', viewValue: '11 A'},
    {value: '11B', viewValue: '11 B'},
    {value: '12A', viewValue: '12 A'},
    {value: '12B', viewValue: '12 B'}
  ];

  teachers: any[] = [
    {value: 'SaduniPerera', viewValue: 'Saduni Perera'},
    {value: 'SachiniSilva', viewValue: 'Sachini Silva'},
    {value: 'TharukaBandara', viewValue: 'Tharuka Bandara'},
    {value: 'PanchaliHerath', viewValue: 'Panchali Herath'}

    ];

}
