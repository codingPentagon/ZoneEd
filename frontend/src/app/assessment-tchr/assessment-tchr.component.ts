import { Component } from '@angular/core';
import {ClassesService} from "../services/classes.service";
import {Class} from "../models/class.model";
import {Assessment} from "../models/assessment.model";
import {FilesService} from "../services/files.service";
import {AssessmentsService} from "../services/assessments.service";
import {MatDialog} from '@angular/material/dialog'
import {AssessmentCreateDialog} from "../assessment-create/assessment-create.component";

@Component({
  selector: 'app-assessment-tchr',
  templateUrl: './assessment-tchr.component.html',
  styleUrls: ['./assessment-tchr.component.css']
})
export class AssessmentTchrComponent {

  sclId = 5555;
  selectedCls = 0;
  assessments!:Assessment[];
  classes!: Class[];
  subjectID:number = 20;
  userID:number = 222;

  constructor(private classesService:ClassesService,private assessmentsService:AssessmentsService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getClasses();
  }

  getClasses() {
    this.classesService.fetchClasses(this.sclId).subscribe({
      next:res=>{
        this.classes = res;
        this.getAssessments(res[0].id,this.subjectID)
      }
    })
  }

  getAssessments(clsID:number,subjectID:number) {
    this.assessmentsService.fetchAssessments(this.sclId,clsID,subjectID).subscribe({
      next:res=>{
        this.assessments = res;
      }
    });
    console.log(this.assessments);
  }


  //assessment creation dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(AssessmentCreateDialog, {
      disableClose: true, data:{clsID:this.classes[this.selectedCls].id,subjectID:this.subjectID,sclID:this.sclId,teacherID:this.userID}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.getAssessments(this.classes[this.selectedCls].id,this.subjectID);
      console.log('The dialog was closed');
    })
  }
}
