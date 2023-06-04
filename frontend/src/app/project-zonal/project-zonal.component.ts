import { Component } from '@angular/core';
import {School} from "../models/school.model";
import {SchoolService} from "../services/school.service";

@Component({
  selector: 'app-project-zonal',
  templateUrl: './project-zonal.component.html',
  styleUrls: ['./project-zonal.component.css']
})
export class ProjectZonalComponent {
  schools:School[]=[];
  selectedSchoolID!:number;

  constructor(private schoolService:SchoolService) {
  }

  ngOnInit(){
    this.getSchools();
  }

  getSchools(){
    this.schoolService.fetchSchools().subscribe({
      next:res=>{
        this.schools=res;
        this.selectedSchoolID = res[0]?.id;
      }
    })
  }
}
