import { Component } from '@angular/core';

export interface AttendanceSheet {
  name: string;
  present: boolean;
}



@Component({
  selector: 'app-attdnce-tchr',
  templateUrl: './attdnce-tchr.component.html',
  styleUrls: ['./attdnce-tchr.component.css']
})
export class AttdnceTchrComponent {
  STUDENTS: AttendanceSheet[] = [
    {name: 'Bhagya Nethmini', present: false},
    {name: 'Rishmi Tharuka', present: false},
    {name: 'Maleesha Kawsarani', present: false},
    {name: 'Sachini Perera', present: false},
    {name: 'GayanI Herath', present: false},
    {name: 'Samadhi Fernando', present: false},

  ];

}


