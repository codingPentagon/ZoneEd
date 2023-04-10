import { Injectable } from '@angular/core';
import {FileMetadata} from "../models/file.model";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private filesMetadata:FileMetadata[]=[];

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
      downloadUrl:''
    });

    const task = this.fireStorage.ref(path).put(file);

    task.then(res=>{
      res.ref.getDownloadURL().then(url=>{
        this.filesMetadata[this.filesMetadata.length-1].downloadUrl = url;
      });
    });

    return task;
  }

  removeFile(fileMeta:FileMetadata){
    this.filesMetadata = this.filesMetadata.filter(meta=>{
      return meta.name!=fileMeta.name;
    });
    return this.fireStorage.ref(fileMeta.pathRef).delete();
  }

  removeAllFiles() {
    for (const meta of this.filesMetadata) {
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
