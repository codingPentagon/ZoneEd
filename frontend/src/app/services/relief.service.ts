import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Teacher} from "../models/teacher.model";
import {ScheduleSlotDetail} from "../models/relief.model";

const url = 'http://localhost:8080/relief/';
@Injectable({
  providedIn: 'root'
})
export class ReliefService {

  constructor(private http:HttpClient) { }

  fetchTeachersOnLeave(sclID:number) {
    return this.http.get<Teacher[]>(url + 'teachersOnLeave/' + sclID);
  }

  fetchVacantSlots(teacherID: number) {
    return this.http.get<ScheduleSlotDetail[]>(url + 'vacantSlots/' + teacherID);
  }
}
