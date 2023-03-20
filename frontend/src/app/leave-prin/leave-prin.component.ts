import { Component } from '@angular/core';
import {Teacher} from "../models/teacher.model";
import {TeachersService} from "../services/teachers.service";
import {LeaveRequest} from "../models/leave-request.model";

import {LeaveService} from "../services/leave.service";


@Component({
  selector: 'app-leave-prin',
  templateUrl: './leave-prin.component.html',
  styleUrls: ['./leave-prin.component.css']
})
export class LeavePrinComponent {
  teachers:Teacher[]=[]
  sclID:number=5555
  leaveRequests:LeaveRequest[]=[]

  selectedTeacher: number=0;
  selectedOption='All'
  pendingLeaveRequests:LeaveRequest[]=[];

  constructor(private teachersService:TeachersService,private leaveService:LeaveService) {
  }

  ngOnInit(){
    this.getTeachers()


  }

  getTeachers() {
    this.teachersService.fetchTeachers(this.sclID).subscribe({
      next: res => {
        this.teachers = res
      }
    })
  }

    getLeaveRequests(teacherID:number){
      this.leaveService.fetchleaveRequests(teacherID).subscribe({
        next:res=>{
          this.leaveRequests=res

        }
      })
    }

    getPendingLeaveRequest(){
      this.pendingLeaveRequests=this.leaveRequests.filter(req=>{
        return req.status.toLowerCase()=='pending'
      })
    }



}
