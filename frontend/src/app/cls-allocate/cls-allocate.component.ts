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
  classes: Class[] = [];
  selectedClass: number = 0;
  newClass: string='';

  constructor(private classesService:ClassesService, private teachersService:TeachersService) {
  }

  ngOnInit(){
    this.getClasses();
  }

  create: boolean = false;

  createToggle() {
    this.create = !this.create;
  }

  modify: boolean = false;



  modifyToggle() {
    this.modify = !this.modify;
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

    this.classesService.storeClass(cls).subscribe()
  }

  getClasses(){
    this.classesService.fetchClasses(this.sclID).subscribe({
      next:res=>{
        this.classes=res;
      }
    })
  }
}
