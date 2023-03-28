import { Component } from '@angular/core';
import {Proposal} from "../models/proposal.model";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-project-prin',
  templateUrl: './project-prin.component.html',
  styleUrls: ['./project-prin.component.css']
})
export class ProjectPrinComponent {
  sclID:number=555;

  constructor(private projectService:ProjectService) {
  }

  ngOnInit(){
    this.getProposals()
  }

  proposalAdd:boolean = false;

  proposalAddToggle(){
    this.proposalAdd = !this.proposalAdd;
  }

  projectAdd:boolean = false;

  projectAddToggle(){
    this.projectAdd = !this.projectAdd;
  }

  proposals: Proposal[]=[];

  projects=[
    {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
    {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
    {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
  ];

  milestones=[
    {title:"Ruk Ropanaya",dueDate:"01/02/2023",feedback:"Good",status:"Approved",
      proofs:[
        {fileName:"1.jpg",fileType:"image",uploadedOn:"01/02/2023"}
      ]
    },
    {title:"Ruk Ropanaya",dueDate:"01/02/2023",feedback:"Good",status:"Approved",
      proofs:[
        {fileName:"1.jpg",fileType:"image",uploadedOn:"01/02/2023"},
        {fileName:"2.jpg",fileType:"movie",uploadedOn:"01/02/2023"}
      ]
    },
  ];

  milestoneAdd:boolean = false;

  milestoneAddToggle(){
    this.milestoneAdd = !this.milestoneAdd;
  }

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
