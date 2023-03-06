import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SchedulePeriod} from "../models/schedule.model";

const url = 'http://localhost:8080/schedule/';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private http:HttpClient) { }

  fetchSchedule(id: number) {
    return this.http.get<SchedulePeriod[]>(url+id.toString())
  }
}
