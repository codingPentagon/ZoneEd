import { Component } from '@angular/core';
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-project-milestones',
  templateUrl: './project-milestones.component.html',
  styleUrls: ['./project-milestones.component.css']
})
export class ProjectMilestonesComponent {

  sclID:number=555;

  constructor(private projectService:ProjectService) {
  }

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

}
