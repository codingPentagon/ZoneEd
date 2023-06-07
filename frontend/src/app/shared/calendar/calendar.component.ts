import {Component, Inject, Input} from '@angular/core';
import {MatCalendar, MatCalendarCellClassFunction} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from "@angular/material/core";
import {Holiday, SchoolEvent} from "../../models/calendar.model";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  holidays: Holiday[] = [];
  selected: Date | null = new Date();
  events: SchoolEvent[] = [];
  @Input() sclID!: number;
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
