import {Component} from '@angular/core';
import {ScheduleService} from "../services/schedule.service";
import {TeachersService} from "../services/teachers.service";
import {Teacher} from "../models/teacher.model";
import {SchedulePeriod} from "../models/schedule.model";

@Component({
  selector: 'app-schedule-prin',
  templateUrl: './schedule-prin.component.html',
  styleUrls: ['./schedule-prin.component.css']
})
export class SchedulePrinComponent {

  sclID=1000;

  constructor(private scheduleService: ScheduleService,
              private teachersService:TeachersService) {
  }

  ngOnInit(){
    this.teachersService.fetchTeachers(this.sclID).subscribe({
      next:(res)=>{
        for (const re of res) {
          this.teachers.push(re)
        }
      }
    });
  }

  teachers:Teacher[] = [];

  schedule:SchedulePeriod[] = [];

  displayedColumns: string[] = ['period', 'mon', 'tue', 'wed', 'thu', 'fri'];

  classes = ["---", "10A", "9A", "8A", "10B", "9B", "8B"];

  modify: boolean = false;

  modifyToggle() {
    this.modify = !this.modify;
  }

  getSchedule(id: number) {
    this.scheduleService.fetchSchedule(id).subscribe({
      next:(res)=>{
        for (const re of res) {
          this.schedule.push(re)
        }
      }
    });
  }
}
