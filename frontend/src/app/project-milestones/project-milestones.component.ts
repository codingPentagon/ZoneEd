import {Component, Input, ViewChild} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {Project} from "../models/project.model";
import {NgForm} from "@angular/forms";
import {FileDropComponent} from "../shared/file-drop/file-drop.component";

@Component({
  selector: 'app-project-milestones',
  templateUrl: './project-milestones.component.html',
  styleUrls: ['./project-milestones.component.css']
})
export class ProjectMilestonesComponent {

  @Input() project!:Project;
  @Input() disableCreation:boolean = false;
  @ViewChild('fileDrop') fileDrop!:FileDropComponent;
  milestoneAdd:boolean = false;
  proofAdd:boolean = false;
  feedbackAdd:boolean = false;
  currentFeedback!: string;

  constructor(private projectService: ProjectService) {
  }


  milestoneAddToggle(){
    this.milestoneAdd = !this.milestoneAdd;
  }

  proofAddToggle(){
    this.proofAdd = !this.proofAdd;
  }

  feedbackAddToggle(){
    this.feedbackAdd = !this.feedbackAdd;
    this.currentFeedback = '';
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

  updateFeedback(index: number) {
    this.project.milestones[index].feedback = this.currentFeedback;
    this.projectService.addProject(this.project).subscribe({
      complete:()=>{
        this.feedbackAddToggle();
      }
    })
  }

  discard() {
    this.fileDrop.deleteAll();
    this.proofAddToggle();
  }

  updateProofs(index: number) {
    this.project.milestones[index].proofs.push(...this.fileDrop.filesMetadata);
    this.projectService.addProject(this.project).subscribe({
      complete:()=>{
        this.proofAddToggle();
      }
    })
  }
}
