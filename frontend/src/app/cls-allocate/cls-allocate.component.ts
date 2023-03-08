import {Component} from '@angular/core';
import {Teacher} from "../models/teacher.model";
import {Class} from "../models/class.model";
import {ClassesService} from "../services/classes.service";
import {TeachersService} from "../services/teachers.service";
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'app-cls-allocate',
  templateUrl: './cls-allocate.component.html',
  styleUrls: ['./cls-allocate.component.css']
})
export class ClsAllocateComponent {

  sclID = 5555;
  teachers: Teacher[] = [];
  classes: Class[] = [{id:0,name:'',sclID:0,teacherID:0,allocatedDate:new Date(),boysCount:0,girlsCount:0}];
  selectedClass: number = 0;
  newClass: string = '';
  tempClasses:Class[]=[];

  constructor(private classesService: ClassesService, private teachersService: TeachersService) {
  }

  ngOnInit() {
    this.getClasses();
    this.getTeachers();
  }

  create: boolean = false;

  createToggle() {
    this.create = !this.create;
    this.newClass = '';
  }

  modify: boolean = false;

  modifyToggle() {
    this.modify = !this.modify;
    if (this.modify){
      this.tempClasses.splice(0);
      //no any other way worked for deep copy
      this.tempClasses = JSON.parse(JSON.stringify(this.classes));
    }
  }


  createClass(clsName: string) {
    const cls: Class = {
      id: 0,
      name: clsName,
      sclID: this.sclID,
      teacherID: 0,
      allocatedDate: new Date(0, 0, 0),
      boysCount: 0,
      girlsCount: 0
    };

    this.classesService.storeClass(cls).subscribe({
      next: res => {
        console.log(res)
      },
      complete: () => this.getClasses()
    })
  }

  getClasses() {
    this.classesService.fetchClasses(this.sclID).subscribe({
      next: res => {
        this.classes = res;
      }
    })
  }

  getTeachers() {
    this.teachersService.fetchTeachers(this.sclID).subscribe({
      next: res => {
        this.teachers = res;
      }
    })
  }

  findTeacherName(teacherID: any) {
    if (teacherID == 0 || teacherID == null) {
      return 'Not Allocated';
    } else {
      return this.teachers.filter(tchr=>{
        return tchr.id == teacherID;
      })[0].name
    }
  }

  allocate() {
    console.log(this.tempClasses)
    this.tempClasses.forEach(cls=>{
      this.classesService.storeClass(cls).subscribe()
    });
    this.getClasses()
  }
}
