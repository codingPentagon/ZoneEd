import {Component} from '@angular/core';
import {Teacher} from "../models/teacher.model";
import {Class} from "../models/class.model";
import {ClassesService} from "../services/classes.service";
import {TeachersService} from "../services/teachers.service";

@Component({
  selector: 'app-cls-allocate',
  templateUrl: './cls-allocate.component.html',
  styleUrls: ['./cls-allocate.component.css']
})
export class ClsAllocateComponent {

  sclID = 5555;
  teachers: Teacher[] = [];
  selectedTeachers:number[]=[];
  classes: Class[] = [{id:0,name:'',sclID:0,teacherID:null,allocatedDate:null,boysCount:0,girlsCount:0}];
  selectedClass: number = 0;
  newClass: string = '';
  //unless card 1 updates before allocating
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
      this.tempClasses = JSON.parse(JSON.stringify(this.classes));
    }
  }


  createClass(clsName: string) {
    const cls: Class = {
      id: 0,
      name: clsName,
      sclID: this.sclID,
      teacherID: null,
      allocatedDate: null,
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

  get findTeacherName() {
    const teacherID = this.classes[this.selectedClass]?.teacherID;
    if (teacherID) {
      return this.teachers.filter(tchr=>{
        return tchr.id == teacherID;
      })[0]?.name
    } else {
      return 'Not Allocated';
    }
  }

  get findAllocatedDate(){
    const date = this.classes[this.selectedClass].allocatedDate;
    return date ? new Date(date).toLocaleDateString() : 'N/A';
  }

  allocate() {
    // console.log(this.tempClasses)
    this.tempClasses.forEach(cls=>{
      cls.allocatedDate = (cls.teacherID ? new Date() : null);
      this.classesService.storeClass(cls).subscribe({
        complete:()=>{
          this.getClasses()
        }
      })
    });
  }

  //filters not selected teachers
  getSelectedTeacher(){
    this.selectedTeachers.splice(0);
    this.tempClasses.forEach(cls=>{
      cls.teacherID && this.selectedTeachers.push(cls.teacherID);
    })
  }
}
