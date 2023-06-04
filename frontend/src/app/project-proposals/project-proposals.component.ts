import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {Proposal} from "../models/proposal.model";
import {FileDropComponent} from "../shared/file-drop/file-drop.component";

@Component({
  selector: 'app-project-proposals',
  templateUrl: './project-proposals.component.html',
  styleUrls: ['./project-proposals.component.css']
})
export class ProjectProposalsComponent {
  @Input() sclID!: number;
  @Input() disableCreation: boolean = false;
  @ViewChild('fileDrop') fileDrop!:FileDropComponent;
  proposals: Proposal[] = [];
  proposalAdd: boolean = false;
  selectedOption='all'
  currentFeedback!: string;

  constructor(private projectService: ProjectService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.sclID!=undefined && this.getProposals()
  }


  proposalAddToggle() {
    this.proposalAdd = !this.proposalAdd;
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
      documents: this.fileDrop.filesMetadata
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
    proposal.feedback = this.currentFeedback;
    proposal.status = approval ? 'Accepted' : 'Rejected';
    this.projectService.addProposal(proposal).subscribe({
      complete:()=>{
        this.getProposals();
      }
    });
  }

  discard() {
    this.fileDrop.deleteAll();
    this.proposalAddToggle();
  }
}
