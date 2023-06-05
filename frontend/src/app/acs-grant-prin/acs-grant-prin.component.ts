import {Component, ViewChild} from '@angular/core';
import {AcsGrantRequest} from "../models/acs-grant.model";
import {NgForm} from "@angular/forms";
import {AcsGrantService} from "../services/acs-grant.service";

@Component({
  selector: 'app-acs-grant-prin',
  templateUrl: './acs-grant-prin.component.html',
  styleUrls: ['./acs-grant-prin.component.css']
})
export class AcsGrantPrinComponent {
  vicePrincipal=[{value:1,viewValue:"Mr.Senarathna A.B.C"},{value:2,viewValue:"Mr.Senarathna A.B.C"}
  ];

  add:boolean = false;
  sclID:number=555;
  acsGrantRequests:AcsGrantRequest[] = [];
  fromDate = new Date();
  toDate!:Date;
  fromTime!:number;
  times:{value:number,viewValue:string}[] = [];
  recentRequestStatus:string = '';
  @ViewChild('request') requestForm!:NgForm;

  constructor(private acsGrantService:AcsGrantService) {
    this.loadTimes();
  }

  ngOnInit(): void {
    this.getRequests();
  }

  loadTimes(){
    for(let i=0;i<24;i++){
      this.times.push({value:i,viewValue:i+':00'});
    }
  }

  addToggle(){
    this.add = !this.add;
  }


  createRequest(value: any) {
    const request:AcsGrantRequest={
      id:0,
      submittedDate:new Date().toISOString(),
      teacherID:value.selectedTeacherID,
      note:value.note,
      fromDate:new Date(this.fromDate.setHours(value.fromTime,0,0,0)).toISOString(),
      toDate:new Date(this.toDate.setHours(value.toTime,0,0,0)).toISOString(),
      status:'Pending',
      sclID:this.sclID,
      comment:''
    }
    this.acsGrantService.addRequest(request).subscribe({
      complete:()=>{
        this.addToggle();
        this.getRequests();
      }
    });
  }

  getRequests() {
    this.acsGrantService.fetchRequests(this.sclID).subscribe({
      next:res=>{
        this.acsGrantRequests = res;
      },
      complete:()=>{
        this.getRecentRequestStatus();
      }
    });
  }

  getRecentRequestStatus(){
    if(this.acsGrantRequests.length>0 && this.acsGrantRequests[0].toDate>=new Date()){
      this.recentRequestStatus = this.acsGrantRequests[0].status.toLowerCase();
    }
    else {
      this.recentRequestStatus = '';
    }
  }

  updateGrantStatus(grant: boolean) {
    this.acsGrantRequests[0].status = grant ? 'Granted':'Revoked';
    this.acsGrantService.addRequest(this.acsGrantRequests[0]).subscribe({
      complete:()=>{
        this.getRequests();
      }
    });
  }
}
