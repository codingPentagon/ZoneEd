import { Component } from '@angular/core';

@Component({
  selector: 'app-grades-stu',
  templateUrl: './grades-stu.component.html',
  styleUrls: ['./grades-stu.component.css']
})
export class GradesStuComponent {
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

  terms: any[] = [
    {value: '1', viewValue: '1st'},
    {value: '2', viewValue: '2nd'},
    {value: '3', viewValue: '3rd'},
  ];

}
