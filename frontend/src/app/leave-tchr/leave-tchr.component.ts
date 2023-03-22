import { Component } from '@angular/core';
import {LeaveRequest} from "../models/leave-request.model";
import {LeaveService} from "../services/leave.service";

@Component({
  selector: 'app-leave-tchr',
  templateUrl: './leave-tchr.component.html',
  styleUrls: ['./leave-tchr.component.css']
})
export class LeaveTchrComponent {

  requests=[
    {condition:"Medical appointment", sentDate:"02/05/2023", fromDate:"03/05/2023", sentTime:"08.30p.m", toDate:"04/05/2023", status:"Pending"},
    {condition:"Medical appointment", sentDate:"02/05/2023", fromDate:"03/05/2023", sentTime:"08.30p.m", toDate:"04/05/2023", status:"Pending"},
  ];
  userID:number=1361;
  add: boolean= false;
  constructor(private leaveService:LeaveService) {

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
}
