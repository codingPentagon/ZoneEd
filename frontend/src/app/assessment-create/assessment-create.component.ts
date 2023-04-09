import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgxFileDropEntry} from "ngx-file-drop";
import {FilesService} from "../services/files.service";
import {FileMetadata} from "../models/file.model";
import {Assessment} from "../models/assessment.model";
import {AssessmentsService} from "../services/assessments.service";

interface DialogData {
  clsID: number,
  subjectID: number,
  sclID: number,
  teacherID: number
}

@Component({
  selector: 'app-assessment-create',
  templateUrl: './assessment-create.component.html',
  styleUrls: ['./assessment-create.component.css']
})
export class AssessmentCreateDialog {
  assessmentDir: string = 'assessments/';
  today: Date = new Date();

  constructor(
    public dialogRef: MatDialogRef<AssessmentCreateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private filesService: FilesService,
    private assessmentsService: AssessmentsService
  ) {
  }

  cancel(): void {
    this.filesService.removeAllFiles();
    this.dialogRef.close();
  }

  //file drop
  files: FileMetadata[] = [];

  dropped(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        this.filesService.addFile(this.assessmentDir, file).percentageChanges().subscribe({
          next: res => {
            console.log(res);
          },
          complete: () => {
            this.filesService.fetchDownloadLinks();
          }
        });
      });
    }
    this.files = this.filesService.filesMetadata;
  }

  icon: string = 'insert_drive_file';

  deleteAssessment(fileMeta: FileMetadata) {
    this.filesService.removeFile(fileMeta);
    this.files = this.filesService.filesMetadata;
  }

  createAssessment(formValue: any) {
    const assessment: Assessment = {
      id: 0,
      name: formValue.name,
      sclID: this.data.sclID,
      clsID: this.data.clsID,
      subjectID: this.data.subjectID,
      creatorID: this.data.teacherID,
      uploadedDate: this.today,
      availableDate: formValue.date,
      documents: this.filesService.filesMetadata
    }
    this.assessmentsService.addAssessment(assessment).subscribe();
    this.filesService.filesMetadata.splice(0);
    this.dialogRef.close();
  }
}
