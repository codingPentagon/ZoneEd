import {Component} from '@angular/core';
import {Teacher} from "../models/teacher.model";
import {ReliefService} from "../services/relief.service";
import {SlotDetail} from "../models/relief.model";

@Component({
  selector: 'app-relief-prin',
  templateUrl: './relief-prin.component.html',
  styleUrls: ['./relief-prin.component.css']
})
export class ReliefPrinComponent {

  modify: boolean = false;

  modifyToggle() {
    this.modify = !this.modify;
    console.log(this.availableTeachers);
  }

  sclID: number = 5555;
  teachersOnLeave:Teacher[] = [];
  availableTeachers:Teacher[] = [];
  vacantSlots: SlotDetail[] = [];
  selectedTeacherID: number = 0;
  relief:any;

  constructor(private reliefService:ReliefService) {
  }

  ngOnInit(): void {
    this.getTeachersOnLeave();
  }

  getTeachersOnLeave() {
    this.reliefService.fetchTeachersOnLeave(this.sclID).subscribe({
      next: res => {
        this.teachersOnLeave = res;
        this.selectedTeacherID = res[0].id;
        this.availableTeachers = res;
      },
      complete: () => {
        this.getVacantSlots();
      }
    })
  }

  getVacantSlots(teacherID?:number) {
    teacherID ? this.selectedTeacherID=teacherID : null;
    this.reliefService.fetchVacantSlots(this.selectedTeacherID).subscribe({
      next: res => {
        this.vacantSlots = res;
      }
    });
    console.log(this.vacantSlots);
  }
}
