import {Component} from '@angular/core';
import {ClassesService} from "../services/classes.service";
import {Class} from "../models/class.model";
import {Assessment} from "../models/assessment.model";
import {AssessmentsService} from "../services/assessments.service";
import {MatDialog} from '@angular/material/dialog'
import {AssessmentCreateDialog} from "../assessment-create/assessment-create.component";
import {FilesService} from "../services/files.service";

@Component({
  selector: 'app-assessment-tchr',
  templateUrl: './assessment-tchr.component.html',
  styleUrls: ['./assessment-tchr.component.css']
})
export class AssessmentTchrComponent {

  sclId = 5555;
  selectedClsID = 0;
  assessments!: Assessment[];
  classes!: Class[];
  subjectID: number = 10;
  userID: number = 222;
  delete: boolean = false;
  create: boolean = false;
  assessmentsToDelete: Assessment[] = [];

  constructor(private classesService: ClassesService, private assessmentsService: AssessmentsService, public dialog: MatDialog, private filesService: FilesService) {
  }

  ngOnInit() {
    this.getClasses();
  }

  deleteToggle(setValue?: boolean) {
    setValue == undefined ? this.delete = !this.delete : this.delete = setValue;
    this.assessmentsToDelete = [];
  }

  getClasses() {
    this.classesService.fetchClasses(this.sclId).subscribe({
      next: res => {
        this.classes = res;
        this.selectedClsID = res[0].id;
        this.getAssessments(res[0].id, this.subjectID)
      }
    })
  }

  getAssessments(clsID: number, subjectID: number) {
    this.assessmentsService.fetchAssessments(this.sclId, clsID, subjectID).subscribe({
      next: res => {
        this.assessments = res;
        console.log(res);
      }
    });
  }

  toggleDeleteItem(assessment: Assessment) {
    const index = this.assessmentsToDelete.findIndex(assess => {
      return assess.id == assessment.id;
    });
    index == -1 ? this.assessmentsToDelete.push(assessment) : this.assessmentsToDelete.splice(index, 1);
  }

  deleteAssessments() {
    const ids: number[] = [];
    this.assessmentsToDelete.forEach(assess => {
      ids.push(assess.id);
      this.filesService.removeAllFiles(assess.documents);
    });

    this.assessmentsService.removeAssessments(ids).subscribe({
      complete: () => {
        this.getAssessments(this.selectedClsID, this.subjectID);
        this.deleteToggle();
      }
    });
  }

  //assessment creation dialog
  openDialog(): void {
    this.create = true;
    const dialogRef = this.dialog.open(AssessmentCreateDialog, {
      disableClose: true,
      data: {
        clsID: this.selectedClsID,
        subjectID: this.subjectID,
        sclID: this.sclId,
        teacherID: this.userID
      }
    });

    dialogRef.afterClosed().subscribe({
      complete: () => {
        this.getAssessments(this.selectedClsID, this.subjectID);
        this.create = false;
        console.log('The dialog was closed');
      }
    });
  }
}
