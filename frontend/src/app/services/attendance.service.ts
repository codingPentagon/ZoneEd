import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AttendanceRecord} from "../models/attendance.model";

const url='http://localhost:8080/attendance/'
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }

  fetchAttendance(clsID: number, date: Date) {
    return this.http.get<AttendanceRecord[]>(url+clsID.toString()+'/'+date.toString())
  }
}
