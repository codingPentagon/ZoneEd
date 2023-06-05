import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LeaveRequest} from "../models/leave-request.model";
import {LeaveRecord} from "../models/leave-record.model";

const url='http://localhost:8080/leaves/'

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  getLeaveRecords!:()=>void;
  leaveCount!: { sick: number; other: number; };

  constructor(private http:HttpClient) { }

  fetchLeaveRequests(selectedTeacherID: number) {
    return this.http.get<LeaveRequest[]>(url+'requests/'+selectedTeacherID.toString())

  }

  addLeaveRecord(leaveRecord: LeaveRecord) {
    return this.http.post(url,leaveRecord)

  }

  updateLeaveRequest(id:number, isAccepted: boolean) {
    return this.http.patch(url+'requests/'+id.toString(),isAccepted)
  }

  addLeaveRequest(request: LeaveRequest) {
    return this.http.post(url+'requests/',request)

  }

  fetchLeaveRecords(selectedTeacherID: number) {
    return this.http.get<LeaveRecord[]>(url+selectedTeacherID.toString())

  }
}
