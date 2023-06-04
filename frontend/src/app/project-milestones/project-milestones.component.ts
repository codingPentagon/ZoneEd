import {Component, Input} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {Project} from "../models/project.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-project-milestones',
  templateUrl: './project-milestones.component.html',
  styleUrls: ['./project-milestones.component.css']
})
export class ProjectMilestonesComponent {

  @Input() project!:Project;
  milestoneAdd:boolean = false;
  proofAdd:boolean = false;

  constructor(private projectService: ProjectService) {
  }


  milestoneAddToggle(){
    this.milestoneAdd = !this.milestoneAdd;
  }

  proofAddToggle(){
    this.proofAdd = !this.proofAdd;
  }

  createMilestone(newMilestone: NgForm) {
    this.project.milestones.push({
      title: newMilestone.value.title,
      createdDate: new Date(),
      dueDate: new Date(newMilestone.value.dueDate),
      feedback: "",
      proofs: []
    });
    console.log(this.project)
    this.projectService.addProject(this.project).subscribe({
      complete: () => {
        this.milestoneAddToggle();
      }
    });
  }
}
