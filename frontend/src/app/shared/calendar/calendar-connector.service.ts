import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MbscCalendarEvent, MbscEventcalendarOptions, Notifications} from "@mobiscroll/angular";

@Injectable({
  providedIn: 'root'
})
export class CalendarConnectorService {
  constructor(private http: HttpClient, private notify: Notifications) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    theme: 'ios',
    themeVariant: 'light',
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    eventDelete: true,
    view: {
      calendar: { type: 'month' },
      agenda: { type: 'month' }
    },
    onEventClick: (event, inst) => {
      this.notify.toast({
        message: event.event.title
      });
    }
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
