import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private fireStorage : AngularFireStorage) { }

  addFile(path:string, file: File){
    return this.fireStorage.ref(path).put(file);
  }

  removeFile(pathRef:string){
    return this.fireStorage.ref(pathRef).delete();
  }
}
