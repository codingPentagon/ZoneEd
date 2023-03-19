import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FileMetadata} from "../models/file.model";
import {HttpClient} from "@angular/common/http";

const url = 'http://localhost:8080/files/'

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private fireStorage : AngularFireStorage,private http:HttpClient) { }

  addFile(pathRef:string, file: File){
    return this.fireStorage.ref(pathRef).put(file);
  }

  addFilesMetadata(metadata : FileMetadata[]){
    return this.http.post(url,metadata)
  }

  fetchFilesMetadata(){

  }
  deleteFile(){

  }
  deleteFileMetadata(){

  }
}
