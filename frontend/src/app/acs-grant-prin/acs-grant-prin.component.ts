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
  grantDetails={grantee:"Nimal",fromDate:"30/12/2023",toDate:"31/12/2023",fromTime:"02.20",toTime:"01.30", isGranted:false}

  vicePrincipal=[{value:1,viewValue:"Mr.Senarathna A.B.C"},{value:2,viewValue:"Mr.Senarathna A.B.C"}
  ];
  add:boolean = false;
  sclID:number=555;
  acsGrantRequests:AcsGrantRequest[] = [];
  fromDate = new Date();
  toDate!:Date;
  fromTime:number=8;
  times:{value:number,viewValue:string}[] = [];
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
      sclID:this.sclID
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
      }
    });
  }
}
