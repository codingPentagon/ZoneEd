import { Component } from '@angular/core';

@Component({
  selector: 'app-project-prin',
  templateUrl: './project-prin.component.html',
  styleUrls: ['./project-prin.component.css']
})
export class ProjectPrinComponent {

  proposalAdd:boolean = false;

  proposalAddToggle(){
    this.proposalAdd = !this.proposalAdd;
  }

  projectAdd:boolean = false;

  projectAddToggle(){
    this.projectAdd = !this.projectAdd;
  }

  proposals=[
    {title:"Ruk Ropanaya",date:"01/02/2023",status:"Pending",feedback:null},
    {title:"Science Camp",date:"01/02/2023",status:"Rejected",feedback:"Need improvements"},
    {title:"English Day",date:"01/02/2023",status:"Accepted",feedback:"Good"}
  ];

  projects=[
    {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
    {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
    {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
  ];

  milestones=[
    {title:"Ruk Ropanaya",dueDate:"01/02/2023",feedback:"Good",status:"Approved",
      proofs:[
        {fileName:"1.jpg",fileType:"image",uploadedOn:"01/02/2023"},
        {fileName:"22.mp4",fileType:"video",uploadedOn:"01/02/2023"}
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
