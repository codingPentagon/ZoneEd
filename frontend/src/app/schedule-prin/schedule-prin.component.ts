import {Component} from '@angular/core';
import {ScheduleService} from "../services/schedule.service";
import {TeachersService} from "../services/teachers.service";
import {Teacher} from "../models/teacher.model";

@Component({
  selector: 'app-schedule-prin',
  templateUrl: './schedule-prin.component.html',
  styleUrls: ['./schedule-prin.component.css']
})
export class SchedulePrinComponent {

  sclID=5555;
  teachers!:Teacher[];
  selectedTeacherID!:number;

  constructor(private scheduleService: ScheduleService,
              private teachersService:TeachersService) {
  }

  ngOnInit(){
    this.teachersService.fetchTeachers(this.sclID).subscribe({
      next:(res)=>{
        this.teachers = res;
        this.selectedTeacherID=res[0]?.id;
      }
    });
  }
}
