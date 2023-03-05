import {Component} from '@angular/core';
import {ScheduleService} from "./schedule.service";

export interface SchedulePeriod {
  period: number,
  mon: string,
  tue: string,
  wed: string,
  thu: string,
  fri: string
}

export interface TeacherSubject{
  id: number,
  name:string,
  subject:string
}

@Component({
  selector: 'app-schedule-prin',
  templateUrl: './schedule-prin.component.html',
  styleUrls: ['./schedule-prin.component.css']
})
export class SchedulePrinComponent {

  sclID=1000;

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit(){
    this.scheduleService.fetchTeachers(this.sclID).subscribe({
      next:(res)=>{
        for (const re of res) {
          this.teachers.push(re)
        }
      }
    });
  }

  teachers:TeacherSubject[] = [];

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
