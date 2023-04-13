import {Component} from '@angular/core';
import {Teacher} from "../models/teacher.model";
import {ReliefService} from "../services/relief.service";

@Component({
  selector: 'app-relief-prin',
  templateUrl: './relief-prin.component.html',
  styleUrls: ['./relief-prin.component.css']
})
export class ReliefPrinComponent {

  availTeachers = ['Saduni Perera', 'Sachini Silva', 'Tharuka Bandara', 'Panchali Herath'];

  reliefs = [
    {class: '6A', period: 2, allocatedTchr: null},
    {class: '6A', period: 2, allocatedTchr: null},
    {class: '6A', period: 2, allocatedTchr: null},
    {class: '6A', period: 2, allocatedTchr: null},
  ];

  modify: boolean = false;

  modifyToggle() {
    this.modify = !this.modify;
    console.log(this.reliefs);
  }

  sclID: number = 5555;
  teachersOnLeave:Teacher[] = [];

  constructor(private reliefService:ReliefService) {
  }

  ngOnInit(): void {
    this.getTeachersOnLeave();
  }

  getTeachersOnLeave() {
    this.reliefService.fetchTeachersOnLeave(this.sclID).subscribe({
      next: res => {
        this.teachersOnLeave = res;
      }
    })
  }
}
