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
      console.log(new Date().toLocaleDateString());
    });
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate) => {
    const holiday = new Date(2023,4,10).toLocaleDateString();
    const event = new Date(2023,4,15).toLocaleDateString();
    if (cellDate.toLocaleDateString()==holiday) {return 'holiday'}
    if (cellDate.toLocaleDateString()==event) {return 'event'}
    return '';
  };
}
