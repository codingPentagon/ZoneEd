import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SchedulePeriod, TeacherSubject} from "./schedule-prin.component";


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private http:HttpClient) { }

  fetchSchedule(id: number) {
    return this.http.get<SchedulePeriod[]>('http://localhost:8080/schedule/schedule'+id.toString())
  }

  fetchTeachers(sclID: number) {
    return this.http.get<TeacherSubject[]>('http://localhost:8080/schedule/teachers'+sclID.toString())
  }
}
