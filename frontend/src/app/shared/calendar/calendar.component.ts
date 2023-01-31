import {Component, HostBinding} from '@angular/core';
import {CalendarToggleService} from "./calendar-toggle.service";
import {CalendarConnectorService} from "./calendar-connector.service";
import {MbscCalendarEvent, MbscEventcalendarOptions} from "@mobiscroll/angular";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  //calendar toggle
  @HostBinding('class.is-open')
  isOpen:boolean = false;
  myEvents:MbscCalendarEvent[];
  eventSettings:MbscEventcalendarOptions;

  constructor(private calToggleService:CalendarToggleService,private calConnService:CalendarConnectorService) {
    this.myEvents = calConnService.myEvents;
    this.eventSettings = calConnService.eventSettings;
  }

  ngOnInit() {
    this.calToggleService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }
}
