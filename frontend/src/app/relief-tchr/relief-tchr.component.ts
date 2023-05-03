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

  fwdAssessments = [
    {fileName:"Assessment 2.pdf",class:"8A",time:"8.00"},
    {fileName:"Assessment 3.pdf",class:"9A",time:"9.00"},
    {fileName:"Assessment 1.docx",class:"8B",time:"8.30"},
    {fileName:"Assessment 4.doc",class:"10A",time:"9.00"},
    {fileName:"Assessment 2.pdf",class:"10B",time:"7.00"},
  ]
}
