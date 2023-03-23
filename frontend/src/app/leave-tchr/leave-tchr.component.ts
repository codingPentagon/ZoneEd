import { Component } from '@angular/core';
import {LeaveRequest} from "../models/leave-request.model";
import {LeaveService} from "../services/leave.service";

@Component({
  selector: 'app-leave-tchr',
  templateUrl: './leave-tchr.component.html',
  styleUrls: ['./leave-tchr.component.css']
})
export class LeaveTchrComponent {

  userID:number=1948;
  add: boolean= false;
  leaveRequests: LeaveRequest[] = []

  constructor(private leaveService:LeaveService) {

  }

  ngOnInit(){
    this.getLeaveRequests();
  }

  addToggle() {
    this.add=!this.add;

  }

  createLeaveRequest(form: any) {
    const request:LeaveRequest={
      id:0,
      submittedDate:new Date(),
      leaveType:form.type,
      reason:form.reason,
      teacherID:this.userID,
      startDate:form.startDate,
      endDate:form.endDate,
      status:'Pending'
    }
    this.leaveService.addLeaveRequest(request).subscribe()
  }

  getLeaveRequests() {
    this.leaveService.fetchLeaveRequests(this.userID).subscribe({
      next: res => {
        this.leaveRequests = res
        console.log(res)
      }
    })
  }
}
