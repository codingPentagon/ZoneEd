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
}
