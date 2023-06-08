import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CalendarDetail, Holiday, SchoolEvent} from "../models/calendar.model";

const url = 'http://localhost:8080/calendar/';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http:HttpClient) { }

  fetchCalendars(sclID: number) {
    return this.http.get<CalendarDetail[]>(url + 'templates/' + sclID);
  }

  addTemplate(template: CalendarDetail) {
    return this.http.post(url + 'templates/', template);
  }

  removeTemplates(deleteItemIDs: number[]) {
    return this.http.delete(url + 'templates/'+deleteItemIDs.toString());
  }

  fetchHolidays(id: number, activeDate:Date) {
    return this.http.get<Holiday[]>(url + 'holidays/' + activeDate);
  }

  fetchSchoolEvents(id: number, activeDate:Date) {
    return this.http.get<SchoolEvent[]>(url + 'events/' + activeDate);
  }

  fetchActiveCalendar(sclID: number) {
    return this.http.get<CalendarDetail>(url + 'active/' + sclID);
  }

  deleteEvents(deleteItems: number[]) {
    return this.http.delete(url + 'events/'+deleteItems.toString());
  }

  addEvent(event: SchoolEvent) {
    return this.http.post(url + 'events/', event);
  }
}
