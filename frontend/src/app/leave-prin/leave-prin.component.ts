import { Component } from '@angular/core';
import {Teacher} from "../models/teacher.model";
import {TeachersService} from "../services/teachers.service";


@Component({
  selector: 'app-leave-prin',
  templateUrl: './leave-prin.component.html',
  styleUrls: ['./leave-prin.component.css']
})
export class LeavePrinComponent {
  teachers:Teacher[]=[]
  sclID:number=5555

  add: any;
  request= {recipient:"Mr.Karunathilaka",reason:"Medical appointment",sentDate:"02/02/2023",fromdate:"02/02/2023",toDate:"0/02/2023",sentTime:"08.00am",status:"accepted"}



  selectedTeacherID: any;

  constructor(private teachersService:TeachersService) {
  }

  ngOnInit(){
    this.teachersService.fetchTeachers(this.sclID).subscribe({
      next:res=>{
        this.teachers=res
      }
    })

  }

  addToggle() {

  }




}
