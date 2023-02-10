import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-prin',
  templateUrl: './schedule-prin.component.html',
  styleUrls: ['./schedule-prin.component.css']
})
export class SchedulePrinComponent {
  teachers = [
    {name: 'Bhagya Nethmini', subject: "Science"},
    {name: 'Rishmi Tharuka', subject: "Science"},
    {name: 'Maleesha Kawsarani', subject: "Science"},
    {name: 'Sachini Perera', subject: "Science"},
    {name: 'GayanI Herath', subject: "Science"},
    {name: 'Samadhi Fernando', subject: "Science"},
    {name: 'Maneesha Bulner', subject: "Science"},
    {name: 'Dulashi Sewmini', subject: "Science"},
    {name: 'Kavindu Sankalpa', subject: "Science"},
    {name: 'Maneth Lorance', subject: "Science"},
    {name: 'Asitha Silva', subject: "Science"},
    {name: 'Malindu Deshan', subject: "Science"},
    {name: 'Thisal Gunasena', subject: "Science"},
    {name: 'Nimesh Deshan', subject: "Science"},
    {name: 'Maneesha Bulner', subject: "Maths"},
    {name: 'Dulashi Sewmini', subject: "Maths"},
    {name: 'Kavindu Sankalpa', subject: "Maths"},
    {name: 'Maneth Lorance', subject: "Maths"},
    {name: 'Asitha Silva', subject: "Maths"},
    {name: 'Malindu Deshan', subject: "Maths"},
    {name: 'Thisal Gunasena', subject: "Maths"},
    {name: 'Nimesh Deshan', subject: "Maths"},
  ];

  schedule = [
    { period: 1, mon:"---", tue:"---", wed:"10A", thu:"10A", fri:"10A" },
    { period: 2, mon:"---", tue:"10A", wed:"---", thu:"10A", fri:"10A" },
    { period: 3, mon:"---", tue:"10A", wed:"10A", thu:"---", fri:"10A" },
    { period: 4, mon:"---", tue:"10A", wed:"10A", thu:"10A", fri:"---" },
    { period: 5, mon:"---", tue:"10A", wed:"10A", thu:"10A", fri:"10A" },
    { period: 6, mon:"---", tue:"---", wed:"10A", thu:"10A", fri:"10A" },
    { period: 7, mon:"---", tue:"10A", wed:"---", thu:"---", fri:"10A" },
    { period: 8, mon:"---", tue:"10A", wed:"10A", thu:"10A", fri:"10A" }
  ];

  displayedColumns: string[] = ['period','mon','tue','wed','thu','fri'];

  classes = ["---","10A","9A","8A","10B","9B","8B"];

  modify:boolean = false;

  modifyToggle(){
    this.modify = !this.modify;
  }
}
