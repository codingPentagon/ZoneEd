import {Component} from '@angular/core';
import {CalendarToggleService} from "./calendar-toggle.service";
import {EventData} from "ngx-event-calendar/lib/interface/event-data";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  //calendar toggle
  isOpen:boolean = false;
  eventData:EventData[] = [];

  constructor(private calToggleService:CalendarToggleService) {
  }

  ngOnInit() {
    this.calToggleService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
      console.log(this.isOpen);
    });
  }
}
