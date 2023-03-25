import {Component, Input} from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import {ClassService} from "../services/class.service";
import {Class} from "../models/class.model";
import {Schedule, SchedulePeriod} from "../models/schedule.model";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  @Input() teacherID:number=0;
  @Input() sclID:number=0;
  @Input() modify:boolean = false;
  schedule:Schedule = {id:0,teacherID:0,schedule:[]}

  classes:Class[]=[{id:0,sclID:0,name:''}];
  emptySchedule:SchedulePeriod[]=[
    {period:1,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:2,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:3,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:4,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:5,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:6,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:7,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:8,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'}
  ]

  constructor(private scheduleService:ScheduleService,private classService:ClassService) {
  }

  ngOnInit() {
    this.classService.fetchClasses(this.sclID).subscribe({
      next:res => {
        this.classes.push(...res)
      }
    });
    this.getSchedule();
  }

  getSchedule(){
    this.scheduleService.fetchSchedule(this.teacherID).subscribe({
      next:res => {
        this.schedule=res;
      },
      error:err => {
        this.schedule.schedule.push(...this.emptySchedule);
      }
    })
  }

  modifySchedule(){
    this.scheduleService.storeSchedule(this.schedule).subscribe()
  }
}
