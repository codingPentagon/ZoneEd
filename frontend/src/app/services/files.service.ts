import { Injectable } from '@angular/core';
import {FileMetadata} from "../models/file.model";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  filesMetadata:FileMetadata[]=[];

  constructor(private fireStorage : AngularFireStorage) { }

  addFile(fileDir:string, file: File){
    const path = fileDir+new Date().getTime().toString()+'-'+file.name;
    this.filesMetadata.push({
      name:file.name,
      size:file.size,
      pathRef:path,
      downloadUrl:''
    })
    return this.fireStorage.ref(path).put(file);
  }

  removeFile(fileMeta:FileMetadata){
    this.filesMetadata = this.filesMetadata.filter(meta=>{
      return meta.name!=fileMeta.name;
    });
    return this.fireStorage.ref(fileMeta.pathRef).delete();
  }

  fetchDownloadLinks() {
    for (const meta of this.filesMetadata) {
      this.fireStorage.ref(meta.pathRef).getDownloadURL().subscribe({
        next:res=>{
          meta.downloadUrl=res;
        }
      });
    }
  }

  removeAllFiles() {
    for (const meta of this.filesMetadata) {
      this.fireStorage.ref(meta.pathRef).delete();
    }
    this.filesMetadata.splice(0);
  }
}
