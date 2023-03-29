import { Component } from '@angular/core';
import {ProjectService} from "../services/project.service";
import {Proposal} from "../models/proposal.model";

@Component({
  selector: 'app-project-proposals',
  templateUrl: './project-proposals.component.html',
  styleUrls: ['./project-proposals.component.css']
})
export class ProjectProposalsComponent {
  sclID: number = 555;

  constructor(private projectService:ProjectService) {
  }

  ngOnInit(){
    this.getProposals()
  }

  proposalAdd:boolean = false;

  proposalAddToggle(){
    this.proposalAdd = !this.proposalAdd;
  }

proposals: Proposal[]=[];

projects=[
  {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
  {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
  {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
];

  getAcceptedProps():any[]{
    return this.proposals.filter(acceptedPropCheck);

    function acceptedPropCheck(element:any) {
      return element.status == 'Accepted';
    }
  }

  getProposals(){
    this.projectService.fetchProposals(this.sclID).subscribe({
      next:res=>{
        this.proposals=res;
      }
    })
  }

}
