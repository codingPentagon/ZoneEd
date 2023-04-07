import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AttendanceSheet} from "../models/attendance.model";

const url='http://localhost:8080/attendance/'
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }

  fetchAttendance(clsID: number, date: Date) {
    return this.http.get<AttendanceSheet>(url+clsID.toString()+'/'+date.toString())
  }

  addAttendance(attendanceSheet: AttendanceSheet) {
    return this.http.post(url, attendanceSheet);
  }
}
