import {Component, Input, SimpleChanges} from '@angular/core';
import {Schedule} from "../models/schedule.model";
import {Class} from "../models/class.model";
import {ClassService} from "../services/class.service";
import {ScheduleService} from "../services/schedule.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  @Input() sclID!: number
  @Input() teacherID!: number
  @Input() disableModify: boolean = false;

  constructor(private classService: ClassService, private scheduleService: ScheduleService) {
  }

  emptySchedule: string = JSON.stringify({
    id: 0, teacherID: 0, year: 0, schedule: [
      {period: 1, mon: null, tue: null, wed: null, thu: null, fri: null},
      {period: 2, mon: null, tue: null, wed: null, thu: null, fri: null},
      {period: 3, mon: null, tue: null, wed: null, thu: null, fri: null},
      {period: 4, mon: null, tue: null, wed: null, thu: null, fri: null},
      {period: 5, mon: null, tue: null, wed: null, thu: null, fri: null},
      {period: 6, mon: null, tue: null, wed: null, thu: null, fri: null},
      {period: 7, mon: null, tue: null, wed: null, thu: null, fri: null},
      {period: 8, mon: null, tue: null, wed: null, thu: null, fri: null},]
  });

  displayedColumns: string[] = ['period', 'mon', 'tue', 'wed', 'thu', 'fri'];
  schedule: Schedule = JSON.parse(this.emptySchedule);

  classes: Class[] = [
    {id: 0, name: '', sclID: 0},
    {id: 0, name: '---', sclID: 0},
  ];

  isComplete!:boolean;
  isAvailable!:boolean;

  ngOnInit() {
    this.getClasses();
  }

  ngOnChanges(changes: SimpleChanges) {
    changes['teacherID'].currentValue?this.getSchedule():null;
  }

  getClasses() {
    this.classService.fetchClasses(this.sclID).subscribe({
      next: (res) => {
        this.classes.push(...res);
      }
    });
  }

  modify: boolean = false;

  modifyToggle() {
    this.modify = !this.modify;
    this.isComplete = true;
    this.getSchedule();
  }

  getSchedule() {
    this.scheduleService.fetchSchedule(this.teacherID).subscribe({
      next: (res) => {
        if (res) {
          this.isAvailable = true;
          this.schedule = res;
        }
        else {
          this.isAvailable = false;
          this.schedule = JSON.parse(this.emptySchedule);
        }
      }
    });
  }

  putSchedule() {
    this.scheduleService.storeSchedule(this.schedule).subscribe({
      complete:()=>{
        this.modifyToggle();
      }
    });
  }

  isCompleted(){
    this.isComplete = this.schedule.schedule.some(rec=>{
      return rec.mon==null || rec.tue==null || rec.wed==null|| rec.thu==null|| rec.fri==null;
    });
  }
}
