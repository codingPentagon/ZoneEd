import {Component} from '@angular/core';
import {Teacher} from "../models/teacher.model";
import {ReliefService} from "../services/relief.service";
import {ReliefSlotCandidates} from "../models/relief.model";

@Component({
  selector: 'app-relief-prin',
  templateUrl: './relief-prin.component.html',
  styleUrls: ['./relief-prin.component.css']
})
export class ReliefPrinComponent {

  modify: boolean = false;

  modifyToggle() {
    this.modify = !this.modify;
  }

  sclID: number = 5555;
  teachersOnLeave: Teacher[]= [];
  reliefSlotsWithCandidates:ReliefSlotCandidates[] = [];
  selectedTeacherID: number = 0;
  relief: any;

  constructor(private reliefService: ReliefService) {
  }

  ngOnInit(): void {
    this.getTeachersOnLeave();
  }

  getTeachersOnLeave() {
    this.reliefService.fetchTeachersOnLeave(this.sclID).subscribe({
      next: res => {
        this.teachersOnLeave = res;
        this.selectedTeacherID = res[0]?.id;
        res.length && this.getReliefSlotsCandidates(res[0]?.id);
      }
    })
  }

  getReliefSlotsCandidates(teacherID: number) {
    this.selectedTeacherID = teacherID;
    this.reliefService.fetchReliefSlotsCandidates(this.sclID, teacherID).subscribe({
      next: res => {
        this.reliefSlotsWithCandidates = res;
      }
    })
  }
}
