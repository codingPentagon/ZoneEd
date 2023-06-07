import {Component, Inject } from '@angular/core';
import {MatCalendar, MatCalendarCellClassFunction} from "@angular/material/datepicker";
import {SchoolHoliday,SchoolEvent} from "../../models/calendar.model";
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from "@angular/material/core";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  //calendar toggle
  isOpen:boolean = false;
  selected:Date|null = new Date();
  sclID:number = 5555;
  holidays:SchoolHoliday[] = [
    {id:1,title:"test holi 1",date:new Date(2023,4,10)},
    {id:2,title:"test holi 2",date:new Date(2023,4,15)},
    {id:3,title:"test holi 3",date:new Date(2023,4,20)},
  ];
  events:SchoolEvent[] = [
    {id:1,title:"test event 1",sclID:5555,dates:[
        new Date(2023,4,1),
        new Date(2023,4,2),
      ]
    },
    {id:2,title:"test event 2",sclID:5555,dates:[
        new Date(2023,4,25),
        new Date(2023,4,26),
        new Date(2023,4,27),
      ]
    },
  ];

  constructor() {
  }

  ngOnInit() {

  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate) => {
    let holidayCheck = this.holidays.some(holiday => {
      return holiday.date.toLocaleDateString() == cellDate.toLocaleDateString();
    })

    if (holidayCheck) {
      return 'holiday'
    }

    let eventCheck:boolean = false;
    for (const event of this.events) {
      eventCheck = event.dates.some(date => {
        return date.toLocaleDateString() == cellDate.toLocaleDateString();
      });
      if (eventCheck) {
        return 'event';
      }
    }

    return '';
  };
  protected readonly calendarHeaderComponent = CalendarHeaderComponent;
}



@Component({
  selector: 'app-calendar-header',
  styleUrls: ['./calendar-header.component.css'],
  templateUrl: './calendar-header.component.html',
})
export class CalendarHeaderComponent {

  constructor(
    private calendar:MatCalendar<Date>,
    private dateAdapter:DateAdapter<Date>,
    @Inject(MAT_DATE_FORMATS) private dateFormats:MatDateFormats
  ) {
  }

  get periodLabel(){
    return this.dateAdapter.format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel).toLocaleUpperCase()
  }

  toNextYear(){
    this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate,1)
  }

  toPreviousYear(){
    this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate,-1)
  }

  toNextMonth(){
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate,1)
  }

  toPreviousMonth(){
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate,-1)
  }
}
