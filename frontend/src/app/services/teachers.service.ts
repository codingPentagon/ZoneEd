import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Teacher} from "../models/teacher.model";

const url='http://localhost:8080/teachers/';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http:HttpClient) {

  }
  fetchTeachers(sclID: number) {
    return this.http.get<Teacher[]>(url+sclID.toString())
  }
}
