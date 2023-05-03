import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "../models/subject.model";

const url = 'http://localhost:8080/subjects/';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http:HttpClient) { }

  fetchTakenSubjects(studentID: number) {
    return this.http.get<Subject[]>(url+'taken/'+studentID);
  }
}
