import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../models/student.model";

const url = 'http://localhost:8080/students/';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) {
  }

  fetchStudents(clsID: number) {
    return this.http.get<Student[]>(url+clsID.toString())
  }
}
