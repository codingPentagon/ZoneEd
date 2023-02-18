import { Component } from '@angular/core';

@Component({
  selector: 'app-attdnce-stu',
  templateUrl: './attdnce-stu.component.html',
  styleUrls: ['./attdnce-stu.component.css']
})
export class AttdnceStuComponent {
  months: any[] = [
    {value: 1, viewValue: 'January'},
    {value: 2, viewValue: 'February'},
    {value: 3, viewValue: 'March'},
    {value: 4, viewValue: 'April'},
    {value: 5, viewValue: 'May'},
    {value: 6, viewValue: 'June'},
    {value: 7, viewValue: 'July'},
    {value: 8, viewValue: 'August'},
    {value: 9, viewValue: 'September'},
    {value: 10, viewValue: 'October'},
    {value: 11, viewValue: 'November'},
    {value: 12, viewValue: 'December'},
    ];

    years=[2023,2022];

    now=new Date();
    selectedMonth=this.now.getMonth()+1;
    selectedYear=this.now.getFullYear();

}
