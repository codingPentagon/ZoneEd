import { Component } from '@angular/core';
import {AcsGrantRequest} from "../models/acs-grant-request.model";

@Component({
  selector: 'app-acs-grant-prin',
  templateUrl: './acs-grant-prin.component.html',
  styleUrls: ['./acs-grant-prin.component.css']
})
export class AcsGrantPrinComponent {
  requests=[
    {recipient:"Nimal", sentDate:"02/05/2023", fromDate:"03/05/2023", sentTime:"08.30p.m", toDate:"04/05/2023", status:"Pending"},
    {recipient:"Nimal", sentDate:"02/05/2023", fromDate:"03/05/2023", sentTime:"08.30p.m", toDate:"04/05/2023", status:"Pending"},
  ]
  grantDetails={grantee:"Nimal",fromDate:"30/12/2023",toDate:"31/12/2023",fromTime:"02.20",toTime:"01.30", isGranted:false}

  vicePrincipal=[{value:"Ranasinghe",viewValue:"Mr.Senarathna A.B.C"},{value:"Mr. Ranasinghe R.J.K",viewValue:"Mr.Senarathna A.B.C"}
  ];
  add:boolean = false;
  userID:number=123;
  AcsGrantRequest:AcsGrantRequest[] = [];
  fromDate = new Date();

  addToggle(){
    this.add = !this.add;
  }


  createRequest(value: any) {
    const request:AcsGrantRequest={
      id:0,
      submittedDate:new Date(),
      principalID:this.userID,
      teacherID:value.selectedTeacher,
      note:value.note,
      fromDate:new Date(value.fromDate),
      toDate:new Date(value.toDate),
      status:value.pending(),
    }
    
  }
}
