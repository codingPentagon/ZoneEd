import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "../models/subject.model";

const url = "http://localhost:8080/subjects/"

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  addSubject(subject: Subject){
    return this.http.post(url, subject)
  }

  fetchSubjects(subjectIDs: number[]){
    return this.http.get<Subject[]>(url+subjectIDs)
  }

  fetchSubject(subjectID: number){
    return this.http.get<Subject>(url+'byID/'+subjectID)
  }
}
