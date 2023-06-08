import {Component} from '@angular/core';
import {CalendarDetail} from "../../models/calendar.model";
import {CalendarService} from "../../services/calendar.service";


@Component({
  selector: 'app-calendar-drawer',
  templateUrl: './calendar-drawer.component.html',
  styleUrls: ['./calendar-drawer.component.css']
})
export class CalendarDrawerComponent {

  //calendar toggle
  isOpen: boolean = false;
  sclID: number = 0;
  calendar!: CalendarDetail;

  constructor(private calendarService: CalendarService) {
    this.sclID = 5555;
  }

  ngOnInit() {
    this.sclID != 0 && this.getCalendar();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  getCalendar() {
    this.calendarService.fetchActiveCalendar(this.sclID).subscribe(res => {
      this.calendar = res;
    })
  }
}
