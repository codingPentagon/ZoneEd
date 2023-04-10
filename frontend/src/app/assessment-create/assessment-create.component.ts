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
  isComplete: boolean = false;
  uploadPercentage!: string;

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
    this.isComplete = false;
    for (const droppedFile of files) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        this.filesService.addFile(this.assessmentDir, file).percentageChanges().subscribe({
          next: res => {
            this.uploadPercentage = res?.toFixed(0) || '0';
          },
          complete: () => {
            this.uploadPercentage = '100';
            this.isComplete = true;
          }
        });
      });
    }
    this.files = this.filesService.getFilesMetadata();
  }

  icon: string = 'insert_drive_file';

  deleteAssessment(fileMeta: FileMetadata) {
    this.filesService.removeFile(fileMeta);
    this.files = this.filesService.getFilesMetadata();
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
      documents: this.filesService.getFilesMetadata()
    }
    this.assessmentsService.addAssessment(assessment).subscribe();
    this.filesService.clearFilesMetadata();
    this.dialogRef.close();
  }
}
