import {Component} from '@angular/core';
import {CalendarToggleService} from "./calendar-toggle.service";
import {MatCalendarCellClassFunction} from "@angular/material/datepicker";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  //calendar toggle
  isOpen:boolean = false;
  selected:Date|null = new Date();

  constructor(private calToggleService:CalendarToggleService) {
  }

  ngOnInit() {
    this.calToggleService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
      console.log(this.isOpen);
    });
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate) => {
    const holiday = new Date().getDate();
    const event = new Date().getDate();
    if (cellDate.getDate()==holiday+1) {return 'holiday'}
    if (cellDate.getDate()==event+10) {return 'event'}
    return '';
  };
}
