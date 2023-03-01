import { Component } from '@angular/core';

@Component({
  selector: 'app-project-zonal',
  templateUrl: './project-zonal.component.html',
  styleUrls: ['./project-zonal.component.css']
})
export class ProjectZonalComponent {


  schoolProjsProps = [
    {schoolname:'Poramadulla Centarl College',
      proposals:[
        {title:"Ruk Ropanaya",date:"01/02/2023",status:"Pending",feedback:null},
        {title:"Science Camp",date:"01/02/2023",status:"Rejected",feedback:"Need improvements"},
        {title:"English Day",date:"01/02/2023",status:"Accepted",feedback:"Good"},
        {title:"Literature Camp",date:"01/02/2023",status:"Accepted",feedback:"Good"},
      ],
      projects:[
        {name:'Ruk Ropanaya',
          milestones:[
            {title:"Collect Plants",dueDate:"01/02/2023",feedback:"Good",status:"Approved",
              proofs:[
                {fileName:"1.jpg",fileType:"image",uploadedOn:"01/02/2023"},
                {fileName:"22.mp4",fileType:"movie",uploadedOn:"01/02/2023"}
              ]
            },
            {title:"Ruk Ropanaya",dueDate:"01/02/2023",feedback:"Good",status:"Approved",
              proofs:[
                {fileName:"1.jpg",fileType:"image",uploadedOn:"01/02/2023"},
                {fileName:"2.jpg",fileType:"movie",uploadedOn:"01/02/2023"}
              ]
            },
          ]
        },
        {name:'Science Camp',
          milestones:[
            {title:"Collect Plants",dueDate:"01/02/2023",feedback:"Good",status:"Approved",
              proofs:[
                {fileName:"1.jpg",fileType:"image",uploadedOn:"01/02/2023"},
                {fileName:"22.mp4",fileType:"movie",uploadedOn:"01/02/2023"}
              ]
            },
          ]
        },
      ],
    },
    {schoolname:'Pushpadana Girls College',
      proposals:[
        {title:"Ruk Ropanaya",date:"01/02/2023",status:"Pending",feedback:null},
        {title:"Science Camp",date:"01/02/2023",status:"Rejected",feedback:"Need improvements"},
        {title:"English Day",date:"01/02/2023",status:"Accepted",feedback:"Good"},
      ],
      projects:[
        {name:'Science Camp',
          milestones:[
            {title:"Ruk Ropanaya",dueDate:"01/02/2023",feedback:"Good",status:"Approved",
              proofs:[
                {fileName:"1.jpg",fileType:"image",uploadedOn:"01/02/2023"},
                {fileName:"22.mp4",fileType:"movie",uploadedOn:"01/02/2023"}
              ]
            },
            {title:"Ruk Ropanaya",dueDate:"01/02/2023",feedback:"Good",status:"Approved",
              proofs:[
                {fileName:"1.jpg",fileType:"image",uploadedOn:"01/02/2023"},
                {fileName:"2.jpg",fileType:"movie",uploadedOn:"01/02/2023"}
              ]
            },
          ]
        },
      ],
    }
  ];

  selectedSchool = 0;
  selectedProject = 0;

  feedbackAdd=false;

  feedbackAddToggle(){
    this.feedbackAdd=!this.feedbackAdd;
  }

  selectedOption='all'

  getPendingProposals(){
    return this.schoolProjsProps[this.selectedSchool].proposals.filter(prop=>{
      return prop.status=='Pending'
    })
  }


}
