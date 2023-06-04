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
  selectedProject!:Project;
  @Input() proposals!: Proposal[];
  @Input() sclID!: number;
  @Input() principalID!: number;
  @Input() disableEdit: boolean = false;

  constructor(private projectService:ProjectService) {
  }

  ngOnChanges(changes:SimpleChanges){
    this.sclID!=undefined && this.getProjects();
  }


  projectAddToggle(){
    this.projectAdd = !this.projectAdd;
  }

  getProjects(){
    this.projectService.fetchProjects(this.sclID).subscribe({
      next:res=>{
        this.selectedProject = res[0];
        this.projects=res;
      }
    })
  }

  get findAcceptedProps(){
    return this.proposals.filter(prop=> {
      return prop.status.toLowerCase() == "accepted" && !this.projects.some(proj=>{
        return proj.proposalID==prop.id
      })
    });
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
