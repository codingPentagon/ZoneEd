import {Component, ViewChild} from '@angular/core';
import {Teacher} from "../models/teacher.model";
import {TeachersService} from "../services/teachers.service";
import {LeaveRequest} from "../models/leave-request.model";

import {LeaveService} from "../services/leave.service";
import {LeaveRecord} from "../models/leave-record.model";


@Component({
  selector: 'app-leave-prin',
  templateUrl: './leave-prin.component.html',
  styleUrls: ['./leave-prin.component.css'],
})
export class LeavePrinComponent {
  teachers: Teacher[] = []
  sclID: number = 5555
  leaveRequests: LeaveRequest[] = [];
  selectedTeacherID: number=0;
  selectedOption = 'All'
  pendingLeaveRequests: LeaveRequest[] = [];

  constructor(private teachersService: TeachersService, private leaveService: LeaveService) {
  }

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.teachersService.fetchTeachers(this.sclID).subscribe({
      next: res => {
        this.teachers = res
      },
      complete:()=>{
        this.selectedTeacherID=this.teachers[0]?.id;
        this.getLeaveRequests();
      }
    })
  }

  getLeaveRequests() {
    console.log(this.selectedTeacherID)
    this.leaveService.fetchLeaveRequests(this.selectedTeacherID).subscribe({
      next: res => {
        this.leaveRequests = res
      },
      complete: () => {
        this.getPendingLeaveRequest();
      }
    })
  }

  getPendingLeaveRequest() {
    this.pendingLeaveRequests = this.leaveRequests.filter(req => {
      return req.status.toLowerCase() == 'pending'
    })
  }


  createLeaveRecord(request: LeaveRequest) {
    const leaveRecord: LeaveRecord = {
      id: 0,
      leaveRequestID: request.id,
      leaveType: request.leaveType,
      teacherID: request.teacherID,
      dates: this.getDaysArray(request.startDate, request.endDate)

    }
    this.leaveService.addLeaveRecord(leaveRecord).subscribe({
      complete:()=>{
        this.getLeaveRequests();
      }
    })

  }

  getDaysArray(start: Date, end: Date) {
    let arr: Date[] = [];
    for (let temp = new Date(start); temp <= end; temp.setDate(temp.getDate() + 1)) {
      arr.push(new Date(temp))
    }
    return arr
  }


  modifyLeaveRequest(id: number, isAccepted: boolean) {
    this.leaveService.updateLeaveRequest(id, isAccepted).subscribe({
      complete:()=>{
        this.getLeaveRequests();
      }
    })
  }
}
