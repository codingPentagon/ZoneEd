import {Component} from '@angular/core';
import {TeachersService} from "../services/teachers.service";
import {Teacher} from "../models/teacher.model";

@Component({
  selector: 'app-schedule-prin',
  templateUrl: './schedule-prin.component.html',
  styleUrls: ['./schedule-prin.component.css']
})
export class SchedulePrinComponent {

  sclID=5555;
  teachers:Teacher[] = [];
  selectedTeacherID:number=0;


  constructor(private teachersService:TeachersService) {
  }

  ngOnInit(){
    this.teachersService.fetchTeachers(this.sclID).subscribe({
      next:(res)=>{
        this.teachers = res;
      },
      complete:()=> {
        this.selectedTeacherID = this.teachers[0]?.id;
      }
    });
  }

  modify: boolean = false;

  modifyToggle() {
    this.modify = !this.modify;
  }
}
