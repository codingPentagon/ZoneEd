import {Component, Inject, Input, SimpleChanges, ViewChild} from '@angular/core';
import {MatCalendar, MatCalendarCellClassFunction} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from "@angular/material/core";
import {CalendarDetail, Holiday, SchoolEvent} from "../models/calendar.model";
import {CalendarService} from "../services/calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  holidays!: Holiday[];
  events!: SchoolEvent[];
  calendarHeaderComponent = CalendarHeaderComponent;
  @Input() calendarTemplate!: CalendarDetail;
  @ViewChild(MatCalendar<Date>) calendar!: MatCalendar<Date>

  constructor(private calendarService:CalendarService) {
  }

  ngOnChanges(changes:SimpleChanges) {
    if (changes['calendarTemplate'].currentValue ) {
      this.refresh();
    }
  }


  getHolidays(date:Date) {
    const templateID = this.calendarTemplate == undefined ? 0 : this.calendarTemplate.id;
    this.calendarService.fetchHolidays(templateID, date).subscribe({
      next: res => {
        this.holidays = res;
      },
      complete: () => {
        this.calendar.updateTodaysDate();
      }
    })
  }

  getSchoolEvents(date:Date){
    this.calendarService.fetchSchoolEvents(this.calendarTemplate.id,date).subscribe({
      next: res => {
        this.events = res;
      },
      complete: () => {
        //to trigger dateClass function
        this.calendar.updateTodaysDate();
      }
    })
  }

  refresh(){
    const activeDate = this.calendar.activeDate;
    this.getSchoolEvents(activeDate)
    this.getHolidays(activeDate);
  }

  dateClass:MatCalendarCellClassFunction<Date> = (cellDate:Date) => {
    if (this.holidays && this.events){
      let holidayCheck = this.holidays.some(holiday => {
        return new Date(cellDate).toLocaleDateString() == new Date(holiday.date).toLocaleDateString();
      })

      if (holidayCheck) {
        return 'holiday'
      }


      let eventCheck:boolean = false;
      for (const event of this.events) {
        eventCheck = event.dates.some(date => {
          return new Date(cellDate).toLocaleDateString() == new Date(date).toLocaleDateString();
        });
        if (eventCheck) {
          return 'event';
        }
      }
      return '';
    }
    else {
      return '';
    }
  }
}



@Component({
  selector: 'app-calendar-header',
  styleUrls: ['./calendar-header.component.css'],
  templateUrl: './calendar-header.component.html',
})
export class CalendarHeaderComponent {

  activeDate:Date = new Date();
  constructor(
    private calendar:MatCalendar<Date>,
    private dateAdapter:DateAdapter<Date>,
    @Inject(MAT_DATE_FORMATS) private dateFormats:MatDateFormats,
    private calendarComponent:CalendarComponent
  ) {
  }

  get periodLabel(){
    this.activeDate = this.calendar.activeDate;
    return this.dateAdapter.format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel).toLocaleUpperCase()
  }

  toNextYear(){
    this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate,1)
    this.calendarComponent.refresh();
  }

  toPreviousYear(){
    this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate,-1)
    this.calendarComponent.refresh();
  }

  toNextMonth(){
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate,1)
    this.calendarComponent.refresh();
  }

  toPreviousMonth(){
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate,-1)
    this.calendarComponent.refresh();
  }
}
