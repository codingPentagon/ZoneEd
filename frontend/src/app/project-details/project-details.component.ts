import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  projectAdd:boolean = false;
  private proposals: any;

  projectAddToggle(){
    this.projectAdd = !this.projectAdd;
  }

  projects=[
    {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
    {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
    {title:"Ruk Ropanaya",createdDate:"01/02/2023",startDate:"03/02/2023",endDate:"03/04/2023",responsiblePersons:"M.D.Gunasena"},
  ];


  getAcceptedProps():any[]{
    return this.proposals.filter(acceptedPropCheck);

    function acceptedPropCheck(element:any) {
      return element.status == 'Accepted';
    }
  }
}
