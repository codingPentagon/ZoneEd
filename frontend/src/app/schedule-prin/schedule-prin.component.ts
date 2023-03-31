import {Component} from '@angular/core';
import {ScheduleService} from "../services/schedule.service";
import {TeachersService} from "../services/teachers.service";
import {Teacher} from "../models/teacher.model";
import {Schedule, SchedulePeriod} from "../models/schedule.model";
import {Class} from "../models/class.model";
import {ClassService} from "../services/class.service";

@Component({
  selector: 'app-schedule-prin',
  templateUrl: './schedule-prin.component.html',
  styleUrls: ['./schedule-prin.component.css']
})
export class SchedulePrinComponent {

  sclID=5555;
  teachers:Teacher[] = [];
  selectedTeacherID:number=0;

  emptySchedule:SchedulePeriod[] = [
    {period:1,mon:null,tue:null,wed:null,thu:null,fri:null},
    {period:2,mon:null,tue:null,wed:null,thu:null,fri:null},
    {period:3,mon:null,tue:null,wed:null,thu:null,fri:null},
    {period:4,mon:null,tue:null,wed:null,thu:null,fri:null},
    {period:5,mon:null,tue:null,wed:null,thu:null,fri:null},
    {period:6,mon:null,tue:null,wed:null,thu:null,fri:null},
    {period:7,mon:null,tue:null,wed:null,thu:null,fri:null},
    {period:8,mon:null,tue:null,wed:null,thu:null,fri:null},
  ];

  schedule:Schedule = {id:0,teacherID:0,year:0,schedule:[]};

  classes:Class[] = [
    {id:0,name:'',sclID:0},
    {id:0,name:'---',sclID:0},
  ];

  constructor(private scheduleService: ScheduleService,
              private teachersService:TeachersService,
              private classService:ClassService) {
  }

  ngOnInit(){
    console.log(this.schedule)
    this.teachersService.fetchTeachers(this.sclID).subscribe({
      next:(res)=>{
        this.teachers = res;
      },
      // complete:()=> {
      //   this.getSchedule(this.teachers[0].id);
      // }
    });

    this.classService.fetchClasses(this.sclID).subscribe({
      next:(res)=>{
        this.classes.push(...res)
      }
    });
  }

  getSchedule(id:number) {
    this.selectedTeacherID = id;
    this.scheduleService.fetchSchedule(this.selectedTeacherID).subscribe({
      next:(res)=>{
        this.schedule = res;
      },
      error:()=>{
        this.schedule.schedule.push(...this.emptySchedule)
      }
    });
    console.log(this.schedule)
  }

  putSchedule(){
    this.schedule.teacherID = this.selectedTeacherID;
    this.scheduleService.storeSchedule(this.schedule).subscribe()
  }

  displayedColumns: string[] = ['period', 'mon', 'tue', 'wed', 'thu', 'fri'];

  modify: boolean = false;

  modifyToggle() {
    this.modify = !this.modify;
  }
}
