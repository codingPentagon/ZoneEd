import { Component } from '@angular/core';
import {LeaveRequest} from "../models/leave-request.model";
import {LeaveService} from "../services/leave.service";

@Component({
  selector: 'app-leave-tchr',
  templateUrl: './leave-tchr.component.html',
  styleUrls: ['./leave-tchr.component.css']
})
export class LeaveTchrComponent {

  userID:number=39;
  add: boolean= false;
  leaveRequests: LeaveRequest[] = [];
  today = new Date();
  selectedStartDate:Date = this.today;

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
      endDate:new Date(form.endDate-1),
      status:'Pending'
    }
    this.leaveService.addLeaveRequest(request).subscribe({
      complete:() => {
        this.addToggle();
        this.getLeaveRequests();
      }
    })
  }

  getLeaveRequests() {
    this.leaveService.fetchLeaveRequests(this.userID).subscribe({
      next: res => {
        this.leaveRequests = res
      }
    })
  }
}
