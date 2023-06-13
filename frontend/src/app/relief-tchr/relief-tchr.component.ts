import { Component } from '@angular/core';
import {ReliefRecord} from "../models/relief.model";
import {ReliefService} from "../services/relief.service";

@Component({
  selector: 'app-relief-tchr',
  templateUrl: './relief-tchr.component.html',
  styleUrls: ['./relief-tchr.component.css']
})
export class ReliefTchrComponent {
  userID:number = 2002;
  reliefRecords:ReliefRecord[] = [];

  constructor(private reliefService:ReliefService) { }

  ngOnInit(): void {
    this.getReliefRecords();
  }

  getReliefRecords() {
    this.reliefService.fetchReliefRecords(this.userID).subscribe({
      next: res => {
        this.reliefRecords = res;
      }
    })
  }

  fwdAssessments:{fileName:string,class:string,time:string}[] = []
}
