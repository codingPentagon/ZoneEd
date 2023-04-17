import {Component} from '@angular/core';
import {Teacher} from "../models/teacher.model";
import {ReliefService} from "../services/relief.service";
import {ReliefRecord, ReliefSlotCandidates} from "../models/relief.model";
import {LeavesService} from "../services/leaves.service";

@Component({
  selector: 'app-relief-prin',
  templateUrl: './relief-prin.component.html',
  styleUrls: ['./relief-prin.component.css']
})
export class ReliefPrinComponent {

  modify: boolean = false;

  modifyToggle() {
    this.modify = !this.modify;
    !this.modify && this.clearReliefAllocations();
  }

  sclID: number = 5555;
  teachersOnLeave: Teacher[] = [];
  reliefSlotsWithCandidates: ReliefSlotCandidates[] = [];
  selectedTeacher!: Teacher;
  reliefAllocations: ReliefRecord[] = [];

  constructor(private reliefService: ReliefService, private leavesService: LeavesService) {
  }

  ngOnInit(): void {
    this.getTeachersOnLeave();
  }

  getTeachersOnLeave() {
    this.leavesService.fetchLeavesToday(this.sclID).subscribe({
      next: res => {
        this.teachersOnLeave = res;
        this.selectedTeacher = res[0];
        res.length && this.getReliefSlotsCandidates(res[0]);
      }
    })
  }

  getReliefSlotsCandidates(teacher: Teacher) {
    this.selectedTeacher = teacher;
    this.reliefService.fetchReliefSlotsCandidates(this.sclID, teacher.id).subscribe({
      next: res => {
        this.reliefSlotsWithCandidates = res;
      }
    })
  }

  toggleReliefAllocation(reliefSlot: ReliefSlotCandidates) {
    const index = this.reliefAllocations.findIndex(reliefRecord => {
      return reliefRecord.className === reliefSlot.className && reliefRecord.period === reliefSlot.period
    });

    if (index === -1) {
      this.reliefAllocations.push({
        id: 0,
        className: reliefSlot.className,
        period: reliefSlot.period,
        allocatedTeacherID: reliefSlot.allocatedTeacherID,
        date: new Date(),
        reliefSubject: this.selectedTeacher.subject,
        sclID: this.sclID
      })
    }
    else {
      this.reliefAllocations.splice(index, 1);
      reliefSlot.allocatedTeacherID && this.toggleReliefAllocation(reliefSlot);
    }
  }

  clearReliefAllocations() {
    this.reliefAllocations.splice(0);
  }

  createReliefAllocations() {
    this.reliefService.addReliefAllocations(this.reliefAllocations).subscribe({
      complete: () => {
        this.getReliefSlotsCandidates(this.selectedTeacher);
      }
    });
  }
}
