import {Component, Input} from '@angular/core';
import {FilesService} from "../../services/files.service";
import {FileMetadata} from "../../models/file.model";
import {NgxFileDropEntry} from "ngx-file-drop";
import {AngularFireUploadTask} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.css']
})
export class FileDropComponent {
  @Input() parentDir!: string;
  isComplete: boolean = false;
  uploadPercentage!: string;
  filesMetadata:FileMetadata[]=[];
  uploadTask!:AngularFireUploadTask;

  constructor(private filesService: FilesService) {
  }

  dropped(files: NgxFileDropEntry[]) {
    this.isComplete = false;
    for (const droppedFile of files) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        this.uploadFile(this.parentDir, file);
        this.uploadTask.percentageChanges().subscribe({
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
  }

  deleteFile(fileMeta: FileMetadata) {
    this.filesMetadata = this.filesMetadata.filter(meta=>{
      return meta.name!=fileMeta.name;
    });

    console.log(fileMeta);
    if (fileMeta.downloadUrl){
      this.filesService.removeFile(fileMeta.pathRef).subscribe({
        complete:()=>{
          console.log('File deleted');
        }
      });
    }
    else {
      this.uploadTask.cancel();
    }
  }

  uploadFile(fileDir:string, file: File){
    const path = fileDir+new Date().getTime().toString()+'-'+file.name;
    this.uploadTask = this.filesService.addFile(path, file);

    this.filesMetadata.push({
      name:file.name,
      size:file.size,
      pathRef:path,
      downloadUrl:null
    });

    this.uploadTask.then(res=>{
      res.ref.getDownloadURL().then(url=>{
        this.filesMetadata.find(meta=>{
          return meta.pathRef==path;
        })!.downloadUrl=url;
      });
    });
    console.log(this.filesMetadata);
  }

  deleteAll(): void {
    this.filesMetadata.forEach(meta=>{
      this.deleteFile(meta);
    })
  }
}
