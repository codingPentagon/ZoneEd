import { Injectable } from '@angular/core';
import {FileMetadata} from "../models/file.model";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private filesMetadata:FileMetadata[]=[];
  private uploadTask!: AngularFireUploadTask;

  constructor(private fireStorage : AngularFireStorage) { }

  getFilesMetadata(){
    return this.filesMetadata;
  }

  addFile(fileDir:string, file: File){
    const path = fileDir+new Date().getTime().toString()+'-'+file.name;

    this.filesMetadata.push({
      name:file.name,
      size:file.size,
      pathRef:path,
      downloadUrl:null
    });

    this.uploadTask = this.fireStorage.ref(path).put(file);

    this.uploadTask.then(res=>{
      res.ref.getDownloadURL().then(url=>{
        this.filesMetadata[this.filesMetadata.length-1].downloadUrl = url;
      });
    });

    return this.uploadTask
  }

  removeFile(fileMeta:FileMetadata){
    this.filesMetadata = this.filesMetadata.filter(meta=>{
      return meta.name!=fileMeta.name;
    });

    if (fileMeta.downloadUrl){
      this.fireStorage.ref(fileMeta.pathRef).delete();
    }
    else {
      this.uploadTask.cancel();
    }
  }

  removeAllFiles(filesMetadata?:FileMetadata[]){
    for (const meta of filesMetadata!=undefined?filesMetadata:this.filesMetadata) {
      this.fireStorage.ref(meta.pathRef).delete();
    }
    this.filesMetadata.splice(0);
  }

  ngOnDestroy(): void {
    this.clearFilesMetadata();
  }

  clearFilesMetadata() {
    this.filesMetadata.splice(0);
  }
}
