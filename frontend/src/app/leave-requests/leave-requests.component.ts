import {Component, Input} from '@angular/core';
import {LeaveRequest} from "../models/leave-request.model";
import {LeaveRecord} from "../models/leave-record.model";
import {LeaveService} from "../services/leave.service";

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent {
  @Input() teacherID!: number;
  @Input() disableCreation: boolean = false;
  leaveRequests: LeaveRequest[] = [];
  selectedOption = 'All'
  pendingLeaveRequests: LeaveRequest[] = [];
  add: boolean= false;
  today = new Date();
  selectedStartDate:Date = this.today;

  constructor(private leaveService: LeaveService) {
  }

  ngOnChanges() {
    this.teacherID!=undefined && this.getLeaveRequests();
  }

  getLeaveRequests() {
    this.leaveService.fetchLeaveRequests(this.teacherID).subscribe({
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
        // this.overview.getLeaveRecords()
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
      teacherID:this.teacherID,
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
}
