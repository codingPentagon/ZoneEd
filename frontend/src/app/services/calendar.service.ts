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
    return this.http.get<CalendarDetail[]>(url + sclID);
  }

  addCalendar(calendar: CalendarDetail) {
    return this.http.post(url, calendar);
  }

  removeCalendars(deleteItemIDs: number[]) {
    return this.http.delete(url +deleteItemIDs.toString());
  }

  fetchHolidays(calendarID: number, activeDate:Date) {
    return this.http.get<Holiday[]>(url + 'holidays/' + calendarID + '/' +activeDate);
  }

  fetchSchoolEvents(calendarID: number, activeDate:Date) {
    return this.http.get<SchoolEvent[]>(url + 'events/' + calendarID + '/' +activeDate);
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

  addHoliday(holiday: Holiday) {
    return this.http.post(url + 'holidays/', holiday);
  }

  deleteHolidays(deleteItems: number[]) {
    return this.http.delete(url + 'holidays/'+deleteItems.toString());
  }

  fetchPendingCalendars() {
    return this.http.get<CalendarDetail[]>(url + 'pending');
  }
}
