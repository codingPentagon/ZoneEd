import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CalendarDetail} from "../models/calendar.model";

const url = 'http://localhost:8080/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http:HttpClient) { }

  fetchTemplates(sclID: number) {
    return this.http.get<CalendarDetail[]>(url + 'templates/' + sclID);
  }

  addTemplate(template: CalendarDetail) {
    return this.http.post(url + 'templates/', template);
  }

  removeTemplates(deleteItemIDs: number[]) {
    return this.http.delete(url + 'templates/'+deleteItemIDs.toString());
  }
}
