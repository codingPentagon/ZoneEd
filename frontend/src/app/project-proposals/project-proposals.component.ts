import {Component, Input, SimpleChanges} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {Proposal} from "../models/proposal.model";

@Component({
  selector: 'app-project-proposals',
  templateUrl: './project-proposals.component.html',
  styleUrls: ['./project-proposals.component.css']
})
export class ProjectProposalsComponent {
  @Input() sclID!: number;
  proposals: Proposal[] = [];
  proposalAdd: boolean = false;
  selectedOption='all'

  constructor(private projectService: ProjectService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.sclID!=undefined && this.getProposals()
  }


  proposalAddToggle() {
    this.proposalAdd = !this.proposalAdd;
  }


  getAcceptedProps(): any[] {
    return this.proposals.filter(acceptedPropCheck);

    function acceptedPropCheck(element: any) {
      return element.status == 'Accepted';
    }
  }

  getProposals() {
    this.projectService.fetchProposals(this.sclID).subscribe({
      next: res => {
        this.proposals = res;
      }
    })
  }

  createProposal(formValue: any) {
    const proposal: Proposal = {
      id: 0,
      title: formValue.title,
      status: 'Pending',
      createdDate: new Date(),
      comment: formValue.comment,
      feedback: '',
      schoolID: this.sclID,
      documents: []
    }
    this.projectService.addProposal(proposal).subscribe({
      complete: () => {
        this.proposalAddToggle();
        this.getProposals();
      }
    })
  }

  get findProposalByStatus(){
    if (this.selectedOption == 'pending'){
      return this.proposals.filter(prop=>{
        return prop.status.toLowerCase()=='pending'
      })
    }
    return this.proposals;
  }


  updateProposalApproval(proposal:Proposal,approval: boolean) {
    proposal.status = approval ? 'Accepted' : 'Rejected';
    this.projectService.addProposal(proposal).subscribe({
      complete:()=>{
        this.getProposals();
      }
    });
  }
}
