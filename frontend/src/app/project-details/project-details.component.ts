import { Component } from '@angular/core';
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
  proposals: Proposal[]=[];
  sclID!: number;

  constructor(private projectService:ProjectService) {
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

  getAcceptedProps():any[]{
    return this.proposals?.filter(acceptedPropCheck);

    function acceptedPropCheck(element:any) {
      return element.status == 'Accepted';
    }
  }
}
