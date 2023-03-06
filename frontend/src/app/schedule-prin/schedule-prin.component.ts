import {Component} from '@angular/core';
import {ScheduleService} from "../services/schedule.service";
import {TeachersService} from "../services/teachers.service";
import {Teacher} from "../models/teacher.model";
import {SchedulePeriod} from "../models/schedule.model";
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
  schedule:SchedulePeriod[] = [
    {period:1,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:2,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:3,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:4,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:5,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:6,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:7,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
    {period:8,mon:'---',tue:'---',wed:'---',thu:'---',fri:'---'},
  ];

  classes:Class[] = [];

  constructor(private scheduleService: ScheduleService,
              private teachersService:TeachersService,
              private classService:ClassService) {
  }

  ngOnInit(){
    this.teachersService.fetchTeachers(this.sclID).subscribe({
      next:(res)=>{
        this.teachers.splice(0);
        for (const re of res) {
          this.teachers.push(re)
        }
      }
    });

    this.classService.fetchClasses(this.sclID).subscribe({
      next:(res)=>{
        this.classes.splice(0);
        for (const re of res) {
          this.classes.push(re)
        }
        console.log(res)
      }
    });
  }

  getSchedule(id: number) {
    this.scheduleService.fetchSchedule(id).subscribe({
      next:(res)=>{
        this.schedule.splice(0);
        for (const re of res) {
          this.schedule.push(re)
        }
      }
    });
  }

  displayedColumns: string[] = ['period', 'mon', 'tue', 'wed', 'thu', 'fri'];

  modify: boolean = false;

  modifyToggle() {
    this.modify = !this.modify;
  }
}
