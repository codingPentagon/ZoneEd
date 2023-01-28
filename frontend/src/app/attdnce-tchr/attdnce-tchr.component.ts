import { Component } from '@angular/core';


@Component({
  selector: 'app-attdnce-tchr',
  templateUrl: './attdnce-tchr.component.html',
  styleUrls: ['./attdnce-tchr.component.css']
})
export class AttdnceTchrComponent {
  students = [
    {name: 'Bhagya Nethmini', present: false},
    {name: 'Rishmi Tharuka', present: false},
    {name: 'Maleesha Kawsarani', present: false},
    {name: 'Sachini Perera', present: false},
    {name: 'GayanI Herath', present: false},
    {name: 'Samadhi Fernando', present: false},
    {name: 'Maneesha Bulner', present: false},
    {name: 'Dulashi Sewmini', present: false},
    {name: 'Kavindu Sankalpa', present: false},
    {name: 'Maneth Lorance', present: false},
    {name: 'Asitha Silva', present: false},
    {name: 'Malindu Deshan', present: false},
    {name: 'Thisal Gunasena', present: false},
    {name: 'Nimesh Deshan', present: false},

  ];
  maxDate = new Date();

}



