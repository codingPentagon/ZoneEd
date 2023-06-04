import {Component, Input, SimpleChanges} from '@angular/core';
import {Proposal} from "../models/proposal.model";
import {Project} from "../models/project.model";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  projectAdd:boolean = false;
  projects:Project[]=[];
  @Input() proposals!: Proposal[];
  @Input() sclID!: number;
  @Input() principalID!: number;

  constructor(private projectService:ProjectService) {
  }

  ngOnChanges(changes:SimpleChanges){
    changes['sclID'] && this.getProjects();
  }


  projectAddToggle(){
    this.projectAdd = !this.projectAdd;
  }

  getProjects(){
    this.projectService.fetchProjects(this.sclID).subscribe({
      next:res=>{
        this.projects=res;
      }
    })
  }

  get findAcceptedProps(){
    return this.proposals?.filter(acceptedPropCheck);

    function acceptedPropCheck(element:any) {
      return element.status.toLowerCase() == 'accepted';
    }
  }

  createProject(value: any) {
    const project:Project = {
      id:0,
      createdDate:new Date(),
      title:value.acceptedProposal.title,
      proposalID:value.acceptedProposal.id,
      startDate:value.startDate,
      endDate:value.endDate,
      responsiblePerson:value.responsiblePerson,
      schoolID:this.sclID,
      principalID:this.principalID,
      milestones:[]
    }

    this.projectService.addProject(project).subscribe({
      complete:()=>{
        this.getProjects();
        this.projectAddToggle();
      }
    });
  }
}
