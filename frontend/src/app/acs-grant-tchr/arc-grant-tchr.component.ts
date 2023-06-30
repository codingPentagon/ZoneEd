import { Component } from '@angular/core';
import {AcsGrantService} from "../services/acs-grant.service";
import {AcsGrantRequest} from "../models/acs-grant.model";

@Component({
  selector: 'app-acs-grant-tchr',
  templateUrl: './acs-grant-tchr.component.html',
  styleUrls: ['./acs-grant-tchr.component.css']
})
export class AcsGrantTchrComponent {
  userID:number=1;
  acsGrantRequest!:AcsGrantRequest;
  comment!: string;

  constructor(private acsGrantService:AcsGrantService) { }

  ngOnInit(): void {
    this.getSentRequest();
  }

  getSentRequest() {
    this.acsGrantService.fetchSentRequest(this.userID).subscribe({
      next:res=>{
        this.acsGrantRequest = res;
      }
    })
  }

  updateRequest(approval:boolean) {
    this.acsGrantRequest.status = approval?'Accepted':'Rejected';
    this.acsGrantRequest.comment = this.comment;
    this.acsGrantService.addRequest(this.acsGrantRequest).subscribe();
  }
}
